import React, { useState } from 'react';

import { Alert, AlertTitle, Autocomplete, Backdrop, Box, Button, CircularProgress, Grid, InputLabel, IconButton, Select, MenuItem, TextField, FormControl, Snackbar, FormHelperText } from '@mui/material';
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
  const { user, handleCloseCallback, currentUser, onSaveSuccessCallBack } = props;


  const [showArrivingWithinThreeDays, setShowArrivingWithinThreeDays] = useState(false);
  const [stateOptions, setStateOptions] = useState(null);
  const [showValidationMessages, setShowValidationMessages] = useState(false);
  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState({ message: "", duration: 0, open: false, severity: "success" })
  const [sangatValue, setSangatValue] = useState({
    _id: user ? user._id : "",
    user_firstName: user ? user.user_firstName : "",
    user_middleName: user ? user.user_middleName : "",
    user_lastName: user ? user.user_lastName : "",
    user_yearOfBirth: user && user.user_yearOfBirth ? dayjs(user.user_yearOfBirth, LOCAL_DATE_FORMAT) : null,
    user_gender: user ? user.user_gender : '',
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
    user_ride_from_airport: user ? user.user_ride_from_airport : '',
    user_last_updated_by: props ? currentUser.toUpperCase() : "",
  });

  
  const closeSnack = () => {
    setSnack({ ...snack, open: false });
  }
  const handleClose = () => {
    handleCloseCallback();
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
      return "";
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
    if (isRequired && !dateValue) {
      return false;
    }
    if (dateValue && !dayjs(dateValue, LOCAL_DATE_FORMAT, true).isValid()) {
      return false;
    }
    return true;
  }

  const isValidForm = () => {

    // required fields

    let isValid = true;
    if (!sangatValue.user_firstName || !sangatValue.user_lastName || !sangatValue.user_middleName || !sangatValue.user_gender || !sangatValue.user_yearOfBirth || !sangatValue.user_goingToAsthan || !sangatValue.user_country || !sangatValue.user_state || !sangatValue.user_city || !sangatValue.user_phoneNumber || !sangatValue.user_arrivingFlightName || !sangatValue.user_arrivingFlightNumber || !sangatValue.user_arrivingFlightDate || !sangatValue.user_arrivingFlightTime || !sangatValue.user_arrivingFlightAirport || !sangatValue.user_ride_from_airport || !sangatValue.user_departingFlightName || !sangatValue.user_departingFlightNumber || !sangatValue.user_departingFlightDate || !sangatValue.user_departingFlightTime || !sangatValue.user_departingFlightAirport) {
      setShowValidationMessages(true);
      isValid = false;
    }
    // phones and emails
    if (!isValidPhoneNumber(sangatValue.user_phoneNumber, true) || !isValidPhoneNumber(sangatValue.user_emergencyContact, false) || !isValidEmail(sangatValue.user_email, false)) {
      setShowValidationMessages(true);
      isValid = false;
    }
    if (!isValidDate(sangatValue.user_yearOfBirth) || !isValidDate(sangatValue.user_arrivingFlightDate) || !isValidDate(sangatValue.user_departingFlightDate)) {
      setShowValidationMessages(true);
      isValid = false;
    }
    if (!isValidTime(sangatValue.user_arrivingFlightTime) || !isValidTime(sangatValue.user_departingFlightTime)) {
      setShowValidationMessages(true);
      isValid = false;
    }
    if (!isValid) {
      setSnack({ open: true, severity: "error", durration: 6000, message: "Please enter all of the required fields and make sure the information is valid." })
    }
    return isValid;

  }

  const addNewSangat = async () => {
    if (!isValidForm()) {
      return;
    }
    if (Math.abs(dayjs().diff(sangatValue.user_arrivingFlightDate, 'day')) <= 3 && currentUser !== 'sandeep') {
      setShowArrivingWithinThreeDays(true);
    }
    else {
      setShowArrivingWithinThreeDays(false);
      let dobLocalDateFormat = sangatValue.user_yearOfBirth.format(LOCAL_DATE_FORMAT);

      {/* TODO: front end and backend name mismatch */ }
      let sangatValueToSave = {
        ...sangatValue, user_yearOfBirth: dobLocalDateFormat, user_arrivingFlightDate: sangatValue.user_arrivingFlightDate.format(LOCAL_DATE_FORMAT),
        user_arrivingFlightTime: sangatValue.user_arrivingFlightTime.format("HH:mm"), user_departingFlightDate: sangatValue.user_departingFlightDate.format(LOCAL_DATE_FORMAT),
        user_departingFlightTime: sangatValue.user_departingFlightTime.format("HH:mm")
      };
      setLoading(true);
      let saveUserResponse;
      if (sangatValue && sangatValue._id) {
        //update
        saveUserResponse = fetch(`${HerokuURL}api/user/update`, {
          method: 'PUT',
          headers: {
            "x-access-token": localStorage.getItem('accessToken'),
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
            sangatValueToSave
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
      saveUserResponse.then((response) => response.json()).then((data) => {

        if (data.message && data.message === 'Failed! User is already in System!') {
          setSnack({ open: true, severity: "error", durration: 6000, message: "This user is already in the system, and cannot be created again. Please search for them and update the information." })
          setLoading(false);
          return;
        }
        setSnack({ open: true, severity: "success", durration: 6000, message: "This user was successfully saved." })
        setLoading(false);

        setSangatValue({
          ...data, user_yearOfBirth: dayjs(data.user_yearOfBirth, LOCAL_DATE_FORMAT), user_arrivingFlightDate: dayjs(data.user_arrivingFlightDate, LOCAL_DATE_FORMAT),
          user_arrivingFlightTime: dayjs(data.user_arrivingFlightTime, "HH:mm"), user_departingFlightDate: dayjs(data.user_departingFlightDate, LOCAL_DATE_FORMAT),
          user_departingFlightTime: dayjs(data.user_departingFlightTime, "HH:mm")
        });

        if (Math.abs(dayjs().diff(sangatValue.user_arrivingFlightDate, 'day')) <= 3) {
          setShowArrivingWithinThreeDays(true);
        }

        onSaveSuccessCallBack(data);
        setLoading(false);
        setShowValidationMessages(false);
        document.getElementById("startForm").scrollIntoView();
      });
    }
  }

  const setSangatFirstName = (e) => {
    setSangatValue({ ...sangatValue, user_firstName: e.target.value ? e.target.value.toUpperCase() : "" });
  }

  const setSangatMiddleName = (e) => {
    setSangatValue({ ...sangatValue, user_middleName: e.target.value ? e.target.value.toUpperCase() : "" });
  }

  const setSangatLastName = (e) => {
    setSangatValue({ ...sangatValue, user_lastName: e.target.value ? e.target.value.toUpperCase() : "" });
  }

  const setSangatArrivalTime = (value) => {
    setSangatValue({ ...sangatValue, user_arrivingFlightTime: value });
  }

  const setSangatDepartureTime = (value) => {
    setSangatValue({ ...sangatValue, user_departingFlightTime: value });
  }



  const setSangatYearOfBirth = (newDob) => {

    {/* TODO: front end and backend name mismatch */ }
    setSangatValue({ ...sangatValue, user_yearOfBirth: newDob });
  }

  const setSangatGender = (e) => {
    setSangatValue({ ...sangatValue, user_gender: e.target.value ? e.target.value.toUpperCase() : "" });
  }


  const setSangatCity = (e) => {
    setSangatValue({ ...sangatValue, user_city: e.target.value ? e.target.value.toUpperCase() : "" });
  }

  const handleCountryChange = (newValue) => {
    setSangatValue({ ...sangatValue, user_country: newValue, user_state: "" });
    if (newValue && newValue.toUpperCase() === "CANADA") {
      setStateOptions(CANADA_PROVINCES);
    } else if (newValue && newValue.toUpperCase() === "USA") {
      setStateOptions(USA_STATES);
    } else {
      setStateOptions([]);
    }
  }

  const handleArrivingAirlineChange = (newValue) => {
    setSangatValue({ ...sangatValue, user_arrivingFlightName: newValue ? newValue.toUpperCase() : "" });
  }

  const handleDepartingAirlineChange = (newValue) => {
    setSangatValue({ ...sangatValue, user_departingFlightName: newValue ? newValue.toUpperCase() : "" });
  }

  const handleStateChange = (newValue) => {
    setSangatValue({ ...sangatValue, user_state: newValue ? newValue.toUpperCase() : "" });
  }

  const handleAsthaanChange = (newValue) => {
    {/* TODO: front end and backend name mismatch */ }
    setSangatValue({ ...sangatValue, user_goingToAsthan: newValue ? newValue.toUpperCase() : "" });
  }

  const setArrivingFlightNumber = (e) => {
    setSangatValue({ ...sangatValue, user_arrivingFlightNumber: e.target.value ? e.target.value.toUpperCase() : "" })
  }

  const setArrivingFlightAirport = (newValue) => {
    setSangatValue({ ...sangatValue, user_arrivingFlightAirport: newValue ? newValue.toUpperCase() : "" })
  }

  const setArrivingFlightDate = (newValue) => {
    setSangatValue({ ...sangatValue, user_arrivingFlightDate: newValue })
  }

  const setDepartingFlightNumber = (e) => {
    setSangatValue({ ...sangatValue, user_departingFlightNumber: e.target.value ? e.target.value.toUpperCase() : "" })
  }

  const setDepartingFlightAirport = (newValue) => {
    setSangatValue({ ...sangatValue, user_departingFlightAirport: newValue ? newValue.toUpperCase() : "" })
  }

  const setDepartingFlightDate = (newValue) => {
    setSangatValue({ ...sangatValue, user_departingFlightDate: newValue })
  }

  const setSangatPhoneNumber = (e) => {
    setSangatValue({ ...sangatValue, user_phoneNumber: e.target.value ? e.target.value.toUpperCase() : "" });
  }

  const setSangatEmail = (e) => {
    e.preventDefault();
    setSangatValue({ ...sangatValue, user_email: e.target.value ? e.target.value.toUpperCase() : "" });
  }

  const setSangatEmergencyContact = (e) => {
    setSangatValue({ ...sangatValue, user_emergencyContact: e.target.value ? e.target.value.toUpperCase() : "" });
  }

  const setSangatComments = (e) => {
    e.preventDefault();
    setSangatValue({ ...sangatValue, user_comments: e.target.value ? e.target.value.toUpperCase() : "" });
  }

  const setUserRideFromAirport = (e) => {
    setSangatValue({ ...sangatValue, user_ride_from_airport: e.target.value ? e.target.value.toUpperCase() : "" })
  }

  return (
    <Dialog maxWidth={"md"} open={true} onClose={handleClose} >
      <DialogTitle style={{ "borderBottom": "1px solid lightgrey" }}>{sangatValue._id ? "Edit User" : "Add User"}
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
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress />
        </Backdrop>

        <Box id="startForm" sx={{
          background: '#FFFFFF',
          borderRadius: '6px',
          padding: '1rem',
          margin: '1rem',
        }}>

          <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "center" }} open={snack.open} autoHideDuration={snack.duration} onClose={closeSnack}>
            <Alert onClose={closeSnack} variant="filled" severity={snack.severity} sx={{ width: '100%' }}>
              {snack.message}
            </Alert>
          </Snackbar>

          {showArrivingWithinThreeDays &&
            <Alert onClose={() => { setShowArrivingWithinThreeDays(false) }} severity="error" sx={{ marginBottom: "16px" }} >
              <AlertTitle>Warning!</AlertTitle>
              You're arriving really soon! Sevadars may not be able to arrange your taxi. Please confirm with local sevadar at 919501487422.
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
            <Grid item xs={12} md={4}>
              <FormControl fullWidth error={!isValidRequiredField(sangatValue.user_gender)}>
                <InputLabel id="genderLabel">Gender *</InputLabel>
                <Select
                  // needed to remove warning messages about unmounted component on console
                  defaultValue={""}
                  required
                  labelId="genderLabel"
                  id="genderSelect"
                  value={sangatValue.user_gender}
                  label="Gender"
                  onChange={setSangatGender}
                >
                  <MenuItem value={"FEMALE"}>FEMALE</MenuItem>
                  <MenuItem value={"MALE"}>MALE</MenuItem>

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

                  renderInput={(params) => <TextField error={!isValidRequiredField(sangatValue.user_goingToAsthan)} required autoComplete="p" label="Closest Asthaan" sx={{ width: '100%' }} helperText={getRequiredFieldHelperText(sangatValue.user_goingToAsthan, "Closest Asthaan")} {...params} />} />

              </FormControl>
            </Grid>
            <AutoCompleteWithOther error={!isValidRequiredField(sangatValue.user_country)} helperText={getRequiredFieldHelperText(sangatValue.user_country, "Country")} optionsList={countries.sort()} label={"Country"} value={sangatValue.user_country} handleChangeCallBack={handleCountryChange} />

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
            <AutoCompleteWithOther error={!isValidRequiredField(sangatValue.user_arrivingFlightName)} helperText={getRequiredFieldHelperText(sangatValue.user_arrivingFlightName, "Arrival airline")} optionsList={AirlineNames.sort()} label={"Arrival Airline"} value={sangatValue.user_arrivingFlightName} handleChangeCallBack={handleArrivingAirlineChange} />

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

            <AutoCompleteWithOther error={!isValidRequiredField(sangatValue.user_arrivingFlightAirport)} helperText={getRequiredFieldHelperText(sangatValue.user_arrivingFlightAirport, "Arrival airport")} optionsList={INDIA_AIRPORT_LIST.sort()} label={"Arrival Airport"} value={sangatValue.user_arrivingFlightAirport} handleChangeCallBack={setArrivingFlightAirport} />
            <Grid item xs={12} md={4}>
              <FormControl fullWidth error={!isValidRequiredField(sangatValue.user_ride_from_airport)} >
                <InputLabel id="needArrivalRideLabel">Need Ride From Airport *</InputLabel>
                <Select
                  // needed to remove warning messages about unmounted component on console
                  defaultValue={""}
                  labelId="needArrivalRideLabel"
                  id="arrivalRideSelect"
                  value={sangatValue.user_ride_from_airport}
                  label="Need Ride From Airport"
                  onChange={setUserRideFromAirport}
                >
                  <MenuItem value={"NO"}>NO</MenuItem>
                  <MenuItem value={"YES"}>YES</MenuItem>

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
            <AutoCompleteWithOther error={!isValidRequiredField(sangatValue.user_departingFlightName)} helperText={getRequiredFieldHelperText(sangatValue.user_departingFlightName, "Return airline")} optionsList={AirlineNames.sort()} label={"Return Airline"} value={sangatValue.user_departingFlightName} handleChangeCallBack={handleDepartingAirlineChange} />
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
            <AutoCompleteWithOther error={!isValidRequiredField(sangatValue.user_departingFlightAirport)} helperText={getRequiredFieldHelperText(sangatValue.user_departingFlightAirport, "Return airport")} optionsList={INDIA_AIRPORT_LIST.sort()} label={"Return Airport"} value={sangatValue.user_departingFlightAirport} handleChangeCallBack={setDepartingFlightAirport} />
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions style={{ "borderTop": "1px solid lightgrey" }}>
        {/* TODO: if form updated open dialog that tells user all changes made will be lost, are you sure you want to close */}
        {/* <Button variant="outlined" size="large" onClick={handleClose}>{sangatValue._id ? "Close" : "Cancel"}</Button> */}
        <Button variant="contained" size="large" onClick={addNewSangat}>Save</Button>
      </DialogActions>
    </Dialog>
  );

}


export default AddEditUser;