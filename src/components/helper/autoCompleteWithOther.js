import React, { useEffect } from 'react';
import { Autocomplete, Grid, TextField } from '@mui/material';



const AutoCompleteWithOther = (props) => {
    const OTHER = "OTHER";
    const {
        optionsList,
        label,
        handleChangeCallBack,
        value,
        error,
        helperText
    } = props;

    // const [options, setOptions] = React.useState(optionsList.push(OTHER));

    if (!optionsList.includes(OTHER)) {
        optionsList.push(OTHER);
    }

    const [showOtherField, setShowOtherField] = React.useState(value && !optionsList.includes(value) ? true : false);
    const [selectValue, setSelectValue] = React.useState(value && !optionsList.includes(value) ? OTHER : value);
    const [otherValue, setOtherValue] = React.useState(value && !optionsList.includes(value) ? value : "");

    const handleOptionChange = (newValue) => {
        if (newValue && newValue.toUpperCase() === OTHER) {
            setShowOtherField(true);
            handleChangeCallBack(null);
        }
        else {
            if (showOtherField) {
                setShowOtherField(false);
                setOtherValue("");
            }
            handleChangeCallBack(newValue);
        }
        setSelectValue(newValue);
    }

    const handleOtherTextChange = (event) => {
        let value = event.target.value ? event.target.value.toUpperCase() : "";
        handleChangeCallBack(value);
        setOtherValue(value);
    }

    return (
        <>
            <Grid item xs={12} md={4}>
                <Autocomplete
                    options={optionsList}
                    value={selectValue}
                    onChange={(e, newValue) => {
                        handleOptionChange(newValue);
                    }}
                    renderInput={(params) => <TextField error={error} helperText={helperText} required label={label} sx={{ width: '100%' }} {...params} autoComplete="p" />} />
            </Grid>
            {showOtherField &&
                <Grid item xs={12} md={4}>

                    <TextField required error={error} helperText={helperText} value={otherValue} sx={{ width: '100%' }} hidden={!showOtherField} onChange={handleOtherTextChange} label={"Enter " + label} variant="outlined" autoComplete="p" />
                </Grid>
            }
        </>
    )

}

export default AutoCompleteWithOther;