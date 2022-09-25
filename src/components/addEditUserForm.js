import React, { useState } from 'react';
// import { Modal, Button, Alert,  Container} from 'react-bootstrap';

import { Alert, AlertTitle, Autocomplete, Box, Button, Grid, InputLabel, IconButton, Select, MenuItem, TextField, FormControl, FormHelperText } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { countries, USA_STATES, CANADA_PROVINCES, asthaans, HerokuURL, AirlineNames, INDIA_AIRPORT_LIST, LOCAL_DATE_FORMAT } from '../constants';
import AutoCompleteWithOther from './helper/autoCompleteWithOther'
const AddEditUser = (props) => {
  const { user } = props;
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showArrivingWithinThreeDays, setShowArrivingWithinThreeDays] = useState(false);
  const [stateOptions, setStateOptions] = useState(null);
  const [showValidationMessages, setShowValidationMessages] = useState(false);
  const [show, setShow] = useState(true);
  const [showDialog, setShowDialong] = useState(false);
  const [hostAddedSuccess, setHostAddedSuccess] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [value, onChange] = useState('00:00');
  const [valueDeparture, onChangeDeparture] = useState('00:00');

  const [sangatValue, setSangatValue] = useState({
    user_firstName: user ? user.user_firstName : "",
    user_middleName: user ? user.user_middleName : "",
    user_lastName: user ? user.user_lastName : "",
    user_yearOfBirth: user && user.user_yearOfBirth ? dayjs(user.user_yearOfBirth, LOCAL_DATE_FORMAT) : null,
    user_gender: user ? user.user_gender : null,
    user_city: user ? user.user_city : "",
    user_state: user ? user.user_state : "",
    user_country: user ? user.user_country : "",
    user_allergy: user ? user.user_allergy : "",
    user_hasAllergy: user ? user.user_hasAllergy : false,
    user_phoneNumber: user ? user.user_phoneNumber : "",
    user_email: user ? user.user_email : "",
    user_arrivingFlightNumber: user ? user.user_arrivingFlightNumber : "",
    user_arrivingFlightName: user ? user.user_arrivingFlightName : "",
    user_arrivingFlightAirport: user ? user.user_arrivingFlightAirport : "",
    user_arrivingFlightDate: user && user.user_arrivingFlightDate ? dayjs(user.user_arrivingFlightDate, LOCAL_DATE_FORMAT) : null,
    user_arrivingFlightTime: user && user.user_arrivingFlightTime ? dayjs(user.user_arrivingFlightTime, "HH:mm") : null,
    user_departingFlightNumber: user ? user.user_departingFlightNumber : "",
    user_departingFlightName: user ? user.user_departingFlightName : "",
    user_departingFlightAirport: user ? user.user_departingFlightAirport : "",
    user_departingFlightDate: user && user.user_departingFlightDate ? dayjs(user.user_departingFlightDate, LOCAL_DATE_FORMAT) : null,
    user_departingFlightTime: user && user.user_departingFlightTime ? dayjs(user.user_departingFlightTime, "HH:mm") : null,
    user_hostedby: user ? user.user_hostedby : "",
    user_goingToAsthan: user ? user.user_goingToAsthan : "",
    user_emergencyContact: user ? user.user_emergencyContact : "",
    user_comments: user ? user.user_comments : "",
    user_age: user ? user.user_age : 0,
    user_ride_from_airport: user ? user.user_ride_from_airport : null,
  });

  const handleClose = () => {
    // Add logic for confirmation
    setShowDialong(true);
    setShow(false);
    window.location.reload();
  }

  const isValidRequiredField = (fieldValue) => {
    if (showValidationMessages && !fieldValue) {
      return false;
    }
    return true;
  }
  const getRequiredFieldHelperText = (fieldValue, fieldName) => {
    if (isValidRequiredField(fieldValue)) {
      return "";
    }
    return fieldName + " is a required field."
  }
  const isValidEmail = (email, isRequired) => {
    if (!showValidationMessages) {
      return true;
    }
    if (isRequired && !isValidRequiredField(email)) {
      return false;
    } else if (email) {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }
    return true;
  };

  const getEmailHelperText = (email, isRequired, fieldName) => {
    if (!showValidationMessages) {
      return true;
    }
    if (isValidEmail(email, isRequired)) {
      return "";
    } else {
      return fieldName + " must be a valid email.";
    }
  }

  const isValidPhoneNumber = (phoneNumber, isRequired) => {
    if (!showValidationMessages) {
      return true;
    }
    if (isRequired && !isValidRequiredField(phoneNumber)) {
      return false;
    } else if (phoneNumber) {
      if (isNaN(phoneNumber)) {
        return false;
      }
      if (phoneNumber <= 0) {
        return false;
      }
      if (phoneNumber.length < 10) {
        return false;
      }
    }
    return true;
  }

  const getPhoneHelperText = (phoneNumber, isRequired, fieldName) => {
    if (isValidPhoneNumber(phoneNumber, isRequired)) {
      return "";
    } else {
      return fieldName + " must be a valid number atleast 10 digits long";
    }
  }

  const getDateFieldLabel = (fieldName) => {
    return fieldName + " (" + LOCAL_DATE_FORMAT + ")";
  }
  const getDateHelperText = (dateValue, isRequired, fieldName) => {
    
    if (isValidDate(dateValue, isRequired)) {
      return "";
    }
    return fieldName + " must be a valid date";
  }

  const getTimeHelperText = (dateValue, isRequired, fieldName) => {
    if (isValidDate(dateValue, isRequired)) {
      return "";
    }
    return fieldName + " must be a valid time";
  }

  const isValidTime = (timeValue, isRequired) => {
    if (!showValidationMessages) {
      return true;
    }
    if (isRequired && !timeValue) {
      return false;
    } else if (timeValue && !dayjs(timeValue, 'HH:mm', true).isValid()) {
      return false;
    }
    return true;
  }

  const isValidDate = (dateValue, isRequired) => {
    if (!showValidationMessages) {
      return true;
    }
    if(isRequired && !dateValue) {
      return false;
    }
    if (dateValue && !dayjs(dateValue, LOCAL_DATE_FORMAT, true).isValid()) {
    return false;
    }
    return true;
  }

  const isValidForm = () => {

    // required fields
    if (!sangatValue.user_firstName || !sangatValue.user_lastName || !sangatValue.user_middleName || !sangatValue.user_gender || !sangatValue.user_yearOfBirth || !sangatValue.user_goingToAsthan || !sangatValue.user_country || !sangatValue.user_state || !sangatValue.user_city || !sangatValue.user_phoneNumber || !sangatValue.user_arrivingFlightName || !sangatValue.user_arrivingFlightNumber || !sangatValue.user_arrivingFlightDate || !sangatValue.user_arrivingFlightTime || !sangatValue.user_arrivingFlightAirport || !sangatValue.user_ride_from_airport || !sangatValue.user_departingFlightName || !sangatValue.user_departingFlightNumber || !sangatValue.user_departingFlightDate || !sangatValue.user_departingFlightTime || !sangatValue.user_departingFlightAirport) {
      setShowValidationMessages(true);
      return false;
    }
    // phones and emails
    if (!isValidPhoneNumber(sangatValue.user_phoneNumber, true) || !isValidPhoneNumber(sangatValue.user_emergencyContact, false) || !isValidEmail(sangatValue.user_email, false)) {
      setShowValidationMessages(true);
      return false;
    }
    if (!isValidDate(sangatValue.user_yearOfBirth) || !isValidDate(sangatValue.user_arrivingFlightDate) || !isValidDate(sangatValue.user_departingFlightDate)) {
      setShowValidationMessages(true);
      return false;
    }
    if (!isValidTime(sangatValue.user_arrivingFlightTime) || !isValidTime(sangatValue.user_departingFlightTime)) {
      setShowValidationMessages(true);
      return false;
    }
    return true;

  }

  const handleShow = () => setShow(true);

  const addNewSangat = async () => {
    if (!isValidForm()) {
      return;
    } else {
      let dobLocalDateFormat = sangatValue.user_yearOfBirth.format(LOCAL_DATE_FORMAT);

      {/* TODO: front end and backend name mismatch */ }
      let sangatValueToSave = {
        ...sangatValue, user_yearOfBirth: dobLocalDateFormat, user_arrivingFlightDate: sangatValue.user_arrivingFlightDate.format(LOCAL_DATE_FORMAT),
        user_arrivingFlightTime: sangatValue.user_arrivingFlightTime.format("HH:mm"), user_departingFlightDate: sangatValue.user_departingFlightDate.format(LOCAL_DATE_FORMAT),
        user_departingFlightTime: sangatValue.user_departingFlightTime.format("HH:mm")
      };
      setLoading(true);
      let saveUserResponse;
      if (user && user._id) {
        //update
        saveUserResponse = fetch(`${HerokuURL}api/user/update`, {
          method: 'PUT',
          headers: {
            "x-access-token": localStorage.getItem('accessToken'),
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
            sangatValue
          ),
        })
      } else {
        saveUserResponse = fetch(`${HerokuURL}api/user/create`, {
          method: 'POST',
          headers: {
            "x-access-token": localStorage.getItem('accessToken'),
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
            sangatValueToSave
          ),
        })
      }
      saveUserResponse.then((res) => res.json()).then((status) => {
        //setToastMessage(status.message);
        setShowSuccessAlert(true);
        document.getElementById("startForm").scrollIntoView();

        if (status.message === 'Failed! User is already in System!') {
          setError(true);
        }
        if ( Math.abs(dayjs().diff(sangatValue.user_arrivingFlightDate, 'day')) <= 3 ) {
          setShowArrivingWithinThreeDays(true);
        }
        setHostAddedSuccess(true);
        setLoading(false);
        setShow(false);
        setShowValidationMessages(false);
        //setInterval(window.location.reload(), 5000);
      })
    }
  }

  const setSangatFirstName = (e) => {
    setSangatValue({ ...sangatValue, user_firstName: e.target.value });
  }

  const setSangatMiddleName = (e) => {
    setSangatValue({ ...sangatValue, user_middleName: e.target.value });
  }

  const setSangatLastName = (e) => {
    setSangatValue({ ...sangatValue, user_lastName: e.target.value });
  }

  const setSangatArrivalTime = (value) => {
    setSangatValue({ ...sangatValue, user_arrivingFlightTime: value });
  }

  const setSangatDepartureTime = (value) => {
    setSangatValue({ ...sangatValue, user_departingFlightTime: value });
  }

  // const setSangatYearOfBirth = (e) => {
  //   e.preventDefault();
  //   const currentDate = new Date();

  //   const age = calculateAge(e.target.value, currentDate);


  //   setSangatValue({...sangatValue, user_yearOfBirth: e.target.value, user_age: age});

  // }

  const setSangatYearOfBirth = (newDob) => {

    // let dobLocalDateFormat = newDob.toFormat(LOCAL_DATE_FORMAT);

    {/* TODO: front end and backend name mismatch */ }
    setSangatValue({ ...sangatValue, user_yearOfBirth: newDob });
  }

  const setSangatGender = (e) => {
    setSangatValue({ ...sangatValue, user_gender: e.target.value });
  }

  const calculateAge = (s, date) => {

    const dateSplitted = s.split("-");
    const year = dateSplitted[0];
    const month = dateSplitted[1];

    const currentYearSplitted = date.toLocaleDateString().split(" ")[0];

    const currentYear = currentYearSplitted.split("/")[2];
    const currentMonth = currentYearSplitted.split("/")[1];

    let age = currentYear - year;

    if (currentMonth < month) {
      age++;
    }

    return age;
  }

  const setSangatCity = (e) => {
    setSangatValue({ ...sangatValue, user_city: e.target.value });
  }

  const handleCountryChange = (newValue) => {
    setSangatValue({ ...sangatValue, user_country: newValue, user_state: "" });
    if (newValue === "Canada") {
      setStateOptions(CANADA_PROVINCES);
    } else if (newValue === "USA") {
      setStateOptions(USA_STATES);
    } else {
      setStateOptions([]);
    }
  }

  const handleArrivingAirlineChange = (newValue) => {
    setSangatValue({ ...sangatValue, user_arrivingFlightName: newValue });
  }

  const handleDepartingAirlineChange = (newValue) => {
    setSangatValue({ ...sangatValue, user_departingFlightName: newValue });
  }

  const handleStateChange = (newValue) => {
    setSangatValue({ ...sangatValue, user_state: newValue });
  }

  const handleAsthaanChange = (newValue) => {
    {/* TODO: front end and backend name mismatch */ }
    setSangatValue({ ...sangatValue, user_goingToAsthan: newValue });
  }

  const setArrivingFlightNumber = (e) => {
    setSangatValue({ ...sangatValue, user_arrivingFlightNumber: e.target.value })
  }

  // const setArrivingFlightName = (value) => {
  //   setSangatValue({...sangatValue, user_arrivingFlightName: value}) 
  // }

  const setArrivingFlightAirport = (value) => {
    setSangatValue({ ...sangatValue, user_arrivingFlightAirport: value })
  }

  const setArrivingFlightDate = (value) => {
    setSangatValue({ ...sangatValue, user_arrivingFlightDate: value })
  }

  const setDepartingFlightNumber = (e) => {
    setSangatValue({ ...sangatValue, user_departingFlightNumber: e.target.value })
  }

  const setDepartingFlightName = (e, value) => {
    e.preventDefault();
    setSangatValue({ ...sangatValue, user_departingFlightName: value })
  }

  const setDepartingFlightAirport = (value) => {
    setSangatValue({ ...sangatValue, user_departingFlightAirport: value })
  }

  const setDepartingFlightDate = (newValue) => {
    setSangatValue({ ...sangatValue, user_departingFlightDate: newValue })
  }

  const setSangatPhoneNumber = (e) => {
    setSangatValue({ ...sangatValue, user_phoneNumber: e.target.value });
  }

  const setSangatEmail = (e) => {
    e.preventDefault();
    setSangatValue({ ...sangatValue, user_email: e.target.value });
  }

  const setSangatAsthan = (e, value) => {
    e.preventDefault();
    setSangatValue({ ...sangatValue, user_goingToAsthan: value });
  }

  const setSangatEmergencyContact = (e) => {
    setSangatValue({ ...sangatValue, user_emergencyContact: e.target.value });
  }

  const setSangatComments = (e) => {
    e.preventDefault();
    setSangatValue({ ...sangatValue, user_comments: e.target.value });
  }

  const setCountrySelection = (e, value) => {
    e.preventDefault();
    setSangatValue({ ...sangatValue, user_country: value });
  }

  const setStateSelection = (e, value) => {
    e.preventDefault();
    setSangatValue({ ...sangatValue, user_state: value });
  }

  const getClosestAsthan = (e) => {
    e.preventDefault();
    let closestAsthan = ""

    if (user_country === "USA") {
      if (user_state === "California") {
        closestAsthan = "Fresno"
      }
      else if (user_state === "Indiana") {
        closestAsthan = "Indiana"
      }
      else if (user_state === "Michigan") {
        closestAsthan = "Michigan"
      }
      else if (user_state === "New York") {
        closestAsthan = "New York"
      }
    }

    setClosestAsthan(closestAsthan);
  }


  const setUserRideFromAirport = (e) => {
    setSangatValue({ ...sangatValue, user_ride_from_airport: e.target.value })
  }

  //document.getElementsByClassName('addSangat').addEventListener('click', handleShow)
  const dselect = document.querySelectorAll('.addSangat');
  dselect.forEach(el => el.addEventListener('click', handleShow));

  const { user_country, user_state, user_arrivingFlightAirport, user_departingFlightAirport, user_ride_from_airport, user_arrivingFlightName } = sangatValue



  return (
         

    <Dialog maxWidth={"md"} open={open} onClose={handleClose} >

      <DialogTitle style={{"border-bottom": "1px solid lightgrey"}}>{user && user._id ? "Edit User" : "Add User"}
      <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
          >
            <CloseIcon />
        </IconButton></DialogTitle>
      <DialogContent style={{ backgroundColor: "#f2f2f2" }} sx={{ backgroundColor: '#f2f2ff2' }}>

        <Box id="startForm" sx={{
          background: '#FFFFFF',
          borderRadius: '6px',
          padding: '1rem',
          margin: '1rem',
        }}>

          {showSuccessAlert &&
            <Alert onClose={() => { setShowSuccessAlert(false) }} severity="success" sx={{ marginBottom: "16px" }} >
              <AlertTitle>Success</AlertTitle>
              {sangatValue.user_firstName} {sangatValue.user_middleName} {sangatValue.user_lastName} was successfullly saved!
            </Alert>}
            {showArrivingWithinThreeDays &&
            <Alert onClose={() => { setShowArrivingWithinThreeDays(false) }} severity="error" sx={{ marginBottom: "16px" }} >
              <AlertTitle>Warning!</AlertTitle>
              You're arriving really soon! Sevadars may not be able to arrange your taxi. Please confirm with local sevadar at Bulandpuri Sahib.
            </Alert>}
          <h4>
            Personal Information
          </h4>



          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <TextField error={!isValidRequiredField(sangatValue.user_firstName)} helperText={getRequiredFieldHelperText(sangatValue.user_firstName, "First name")} autoComplete="p" fullWidth required label="First Name" value={sangatValue.user_firstName} onChange={setSangatFirstName} variant="outlined" />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField error={!isValidRequiredField(sangatValue.user_middleName)} helperText={getRequiredFieldHelperText(sangatValue.user_middleName, "Middle name")} autoComplete="p" fullWidth required label="Middle Name" value={sangatValue.user_middleName} onChange={setSangatMiddleName} variant="outlined" />

            </Grid>
            <Grid item xs={12} md={4}>
              <TextField error={!isValidRequiredField(sangatValue.user_lastName)} helperText={getRequiredFieldHelperText(sangatValue.user_lastName, "Last name")} autoComplete="p" fullWidth required label="Last Name" value={sangatValue.user_lastName} onChange={setSangatLastName} variant="outlined" />

            </Grid>
            {/* //TODO: add start of new row */}

            <Grid item xs={12} md={4}>
              <FormControl fullWidth error={!isValidRequiredField(sangatValue.user_gender)}>
                <InputLabel id="genderLabel">Gender *</InputLabel>
                <Select
                  required
                  labelId="genderLabel"
                  id="genderSelect"
                  value={sangatValue.user_gender}
                  label="Gender"
                  onChange={setSangatGender}
                >
                  <MenuItem value={"Female"}>Female</MenuItem>
                  <MenuItem value={"Male"}>Male</MenuItem>

                </Select>
                {!sangatValue.user_gender && showValidationMessages &&
                  <FormHelperText>{getRequiredFieldHelperText(sangatValue.user_, "Gender")}</FormHelperText>
                }
              </FormControl>
            </Grid>

            <Grid item xs={12} md={4}>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  label={getDateFieldLabel("Birthdate")}
                  inputFormat={LOCAL_DATE_FORMAT}
                  disableFuture={true}
                  value={sangatValue.user_yearOfBirth}
                  onChange={setSangatYearOfBirth}

                  // mask="____-__-__"
                  renderInput={(params) => <TextField required sx={{ width: "100%" }} {...params} error={!isValidDate(sangatValue.user_yearOfBirth, true)} helperText={getDateHelperText(sangatValue.user_yearOfBirth, true, "Birthdate")} />}
                />

              </LocalizationProvider>

            </Grid>

            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <Autocomplete
                  options={asthaans.sort()}
                  value={sangatValue.user_goingToAsthan}
                  onChange={(e, newValue) => {
                    handleAsthaanChange(newValue);
                  }}

                  renderInput={(params) => <TextField error={!isValidRequiredField(sangatValue.user_goingToAsthan)} helperText={getRequiredFieldHelperText(sangatValue.user_goingToAsthan, "Closest Asthaan")} required autoComplete="p" label="Closest Asthaan" sx={{ width: '100%' }} {...params} />} />

              </FormControl>
            </Grid>


            {/* new row */}
            {/* <Grid item xs={12} md={8}> */}
            {/* <FormControl > */}

            <AutoCompleteWithOther error={!isValidRequiredField(sangatValue.user_country)} helperText={getRequiredFieldHelperText(sangatValue.user_country, "Country")} optionsList={countries.sort()} label={"Country"} value={sangatValue.user_country} handleChangeCallBack={handleCountryChange} />
            {/* </FormControl> */}
            {/* </Grid> */}

            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                {stateOptions && stateOptions.length > 0 &&
                  <Autocomplete
                    options={stateOptions}
                    value={sangatValue.user_state}
                    onChange={(e, newValue) => {
                      handleStateChange(newValue);
                    }}
                    renderInput={(params) => <TextField error={!isValidRequiredField(sangatValue.user_state)} helperText={getRequiredFieldHelperText(sangatValue.user_state, "State/Province")} autoComplete="p" label="State/Province" sx={{ width: '100%' }} {...params} />} />

                }
                {(!stateOptions || stateOptions.length == 0) &&
                  <TextField error={!isValidRequiredField(sangatValue.user_state)} helperText={getRequiredFieldHelperText(sangatValue.user_state, "State/Province")} fullWidth required label="State/Province" value={sangatValue.user_state} onChange={(e) => { handleStateChange(e.target.value) }} variant="outlined" />

                }
              </FormControl>
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField error={!isValidRequiredField(sangatValue.user_city)} helperText={getRequiredFieldHelperText(sangatValue.user_city, "City")} autoComplete="p" fullWidth required label="City" value={sangatValue.user_city} onChange={setSangatCity} variant="outlined" />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField error={!isValidPhoneNumber(sangatValue.user_phoneNumber, true)} helperText={getPhoneHelperText(sangatValue.user_phoneNumber, true, "Phone")} autoComplete="p" fullWidth required label="Phone" value={sangatValue.user_phoneNumber} onChange={setSangatPhoneNumber} variant="outlined" />
            </Grid>

            <Grid item xs={12} md={4}>
              {/* TODO: front end and backend name mismatch */}
              <TextField error={!isValidPhoneNumber(sangatValue.user_emergencyContact, false)} helperText={getPhoneHelperText(sangatValue.user_emergencyContact, false, "Secondary phone")} autoComplete="p" fullWidth label="Secondary Phone" value={sangatValue.user_emergencyContact} onChange={setSangatEmergencyContact} variant="outlined" />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField error={!isValidEmail(sangatValue.user_email, false)} helperText={getEmailHelperText(sangatValue.user_email, false, "Email")} autoComplete="p" fullWidth label="Email" type="email" value={sangatValue.user_email} onChange={setSangatEmail} variant="outlined" />
            </Grid>


            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                label="Comments"
                multiline
                rows={3}
                value={sangatValue.user_comments}
                onChange={setSangatComments}
              />
            </Grid>
          </Grid>




        </Box>
        <Box sx={{
          background: '#FFFFFF',
          borderRadius: '6px',
          padding: '1rem',
          margin: '1rem',
        }}>
          <h4>
            Arriving Flight
          </h4>

          <Grid container spacing={2}>
            {/* <Grid item xs={12} md={8}> */}
            {/* <FormControl fullWidth> */}

            <AutoCompleteWithOther error={!isValidRequiredField(sangatValue.user_arrivingFlightName)} helperText={getRequiredFieldHelperText(sangatValue.user_arrivingFlightName, "Arrival airline")} optionsList={AirlineNames.sort()} label={"Arrival Airline"} value={sangatValue.user_arrivingFlightName} handleChangeCallBack={handleArrivingAirlineChange} />
            {/* </FormControl> */}
            {/* </Grid> */}

            <Grid item xs={12} md={4}>
              <TextField error={!isValidRequiredField(sangatValue.user_arrivingFlightNumber)} helperText={getRequiredFieldHelperText(sangatValue.user_arrivingFlightNumber, "Flight number")} autoComplete="p" fullWidth required label="Flight Number" value={sangatValue.user_arrivingFlightNumber} onChange={setArrivingFlightNumber} variant="outlined" />
            </Grid>

            <Grid item xs={12} md={4}>
              <LocalizationProvider dateAdapter={AdapterDayjs} >

                <DatePicker
                  inputFormat={LOCAL_DATE_FORMAT}
                  label={getDateFieldLabel("Arrival Date")}
                  value={sangatValue.user_arrivingFlightDate}
                  onChange={(newValue) => {
                    setArrivingFlightDate(newValue);
                  }}
                  renderInput={(params) => <TextField required sx={{ width: '100%' }} {...params} error={!isValidDate(sangatValue.user_arrivingFlightDate, true)} helperText={getDateHelperText(sangatValue.user_arrivingFlightDate, true, "Arrival Date")} />}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12} md={4}>
              <LocalizationProvider dateAdapter={AdapterDayjs} >

                <TimePicker
                  //  inputFormat={"HH:mm"} 
                  label="Arrival Time"
                  ampm={false}
                  ampmInClock={false}
                  value={sangatValue.user_arrivingFlightTime}
                  onChange={(newValue) => {
                    setSangatArrivalTime(newValue);
                  }}
                  renderInput={(params) => <TextField required sx={{ width: '100%' }} {...params} error={!isValidTime(sangatValue.user_arrivingFlightTime, true)} helperText={getTimeHelperText(sangatValue.user_arrivingFlightTime, true, "Arrival time")} />}
                />
              </LocalizationProvider>
            </Grid>

            {/* <Grid item xs={12} md={8}>
              <FormControl fullWidth> */}

            <AutoCompleteWithOther error={!isValidRequiredField(sangatValue.user_arrivingFlightAirport)} helperText={getRequiredFieldHelperText(sangatValue.user_arrivingFlightAirport, "Arrival airport")} optionsList={INDIA_AIRPORT_LIST.sort()} label={"Arrival Airport"} value={sangatValue.user_arrivingFlightAirport} handleChangeCallBack={setArrivingFlightAirport} />
            {/* </FormControl> */}
            {/* </Grid> */}
            <Grid item xs={12} md={4}>
              <FormControl fullWidth error={!isValidRequiredField(sangatValue.user_ride_from_airport)} >
                <InputLabel id="needArrivalRideLabel">Need Ride From Airport *</InputLabel>
                <Select
                  labelId="needArrivalRideLabel"
                  id="arrivalRideSelect"
                  value={sangatValue.user_ride_from_airport}
                  label="Need Ride From Airport"
                  onChange={setUserRideFromAirport}
                >
                  <MenuItem value={"No"}>No</MenuItem>
                  <MenuItem value={"Yes"}>Yes</MenuItem>

                </Select>
                <FormHelperText>{getRequiredFieldHelperText(sangatValue.user_ride_from_airport, "Need ride from airport")}</FormHelperText>
              </FormControl>
            </Grid>

          </Grid>


        </Box>
        <Box sx={{
          background: '#FFFFFF',
          borderRadius: '6px',
          padding: '1rem',
          margin: '1rem',
        }}>
          <h4>
            Return Flight
          </h4>
          <Grid container spacing={2}>
            {/* <Grid item xs={12} md={8}> */}
            {/* <FormControl fullWidth> */}

            <AutoCompleteWithOther error={!isValidRequiredField(sangatValue.user_departingFlightName)} helperText={getRequiredFieldHelperText(sangatValue.user_departingFlightName, "Return airline")} optionsList={AirlineNames.sort()} label={"Return Airline"} value={sangatValue.user_departingFlightName} handleChangeCallBack={handleDepartingAirlineChange} />
            {/* </FormControl> */}
            {/* </Grid> */}

            <Grid item xs={12} md={4}>
              <TextField error={!isValidRequiredField(sangatValue.user_departingFlightNumber)} helperText={getRequiredFieldHelperText(sangatValue.user_departingFlightNumber, "Return flight number")} autoComplete="p" fullWidth required label="Return Flight Number" value={sangatValue.user_departingFlightNumber} onChange={setDepartingFlightNumber} variant="outlined" />
            </Grid>

            <Grid item xs={12} md={4}>
              <LocalizationProvider dateAdapter={AdapterDayjs} >

                <DatePicker
                  inputFormat={LOCAL_DATE_FORMAT}
                  label={getDateFieldLabel("Return Date")}
                  value={sangatValue.user_departingFlightDate}
                  onChange={(newValue) => {
                    setDepartingFlightDate(newValue)
                  }}
                  renderInput={(params) => <TextField required sx={{ width: '100%' }} {...params} error={!isValidDate(sangatValue.user_departingFlightDate, true)} helperText={getDateHelperText(sangatValue.user_departingFlightDate, true, "Return date")} />}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12} md={4}>
              <LocalizationProvider dateAdapter={AdapterDayjs} >

                <TimePicker
                  label="Return Time"
                  inputFormat={"HH:mm"}
                  ampm={false}
                  ampmInClock={false}
                  value={sangatValue.user_departingFlightTime}
                  onChange={(newValue) => {
                    setSangatDepartureTime(newValue);
                  }}
                  renderInput={(params) => <TextField required sx={{ width: '100%' }} {...params} error={!isValidTime(sangatValue.user_departingFlightTime, true)} helperText={getTimeHelperText(sangatValue.user_departingFlightTime, true, "Return time")} />}
                />
              </LocalizationProvider>
            </Grid>

            {/* <Grid item xs={12} md={8}>
              <FormControl fullWidth> */}

            <AutoCompleteWithOther error={!isValidRequiredField(sangatValue.user_departingFlightAirport)} helperText={getRequiredFieldHelperText(sangatValue.user_departingFlightAirport, "Return airport")} optionsList={INDIA_AIRPORT_LIST.sort()} label={"Return Airport"} value={sangatValue.user_departingFlightAirport} handleChangeCallBack={setDepartingFlightAirport} />
            {/* </FormControl> */}
            {/* </Grid> */}

          </Grid>


        </Box>


      </DialogContent>
      <DialogActions style={{"border-top": "1px solid lightgrey"}}>
        <Button variant="outlined" size="large" onClick={handleClose}>Cancel</Button>
        <Button variant="contained" size="large" onClick={addNewSangat}>Save</Button>
      </DialogActions>
    </Dialog>



    //    </Modal.Body>
    //   <Modal.Footer>
    //     <Button variant="secondary" onClick={handleClose}>
    //       Close
    //     </Button>
    //     <Button variant="primary" onClick={addNewSangat} disabled={sangatValue.user_firstName==="" || sangatValue.user_lastName==="" || sangatValue.user_yearOfBirth==="" || sangatValue.user_city===""|| sangatValue.user_state==="" || sangatValue.user_phoneNumber===""}>
    //       Save Changes
    //     </Button>
    //   </Modal.Footer>
    // </Modal> 
    // </Container>
  );

}


export default AddEditUser;