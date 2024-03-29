import dayjs from 'dayjs';
import { LOCAL_DATE_FORMAT } from '../../constants';

const calculateAge = (data) => {
    if (data && data.data && data.data.user_yearOfBirth && dayjs(data.data.user_yearOfBirth).isValid()) {
        return dayjs().diff(data.data.user_yearOfBirth, "year");
    }
    // dob is invalid or null, so render nothing
    return null;
}

const formatDatetTime = (data) => {
    if (data && data.data && data.data.updatedAt && dayjs(data.data.updatedAt).isValid()) {
        return dayjs(data.data.updatedAt).format(LOCAL_DATE_FORMAT + " HH:mm");
    }
    // dob is invalid or null, so render nothing.
    return null;
}

const countTotal =(data) => {
    let count = 0;


    if(data & data.data&& data.forEach(user=>{
        data=user.arrivingFlightDate;
    }));
}


export const usersMockData = [
    {Firstname: "Manjodh", Lastname: "Chahal", City: "Fresno", DOB:"10/23/89", FlightInfo: "AI 183", AllergyInfo:"None", id: '1'},
    {Firstname: "Amanjodh", Lastname: "Chahal", City: "Surrey", DOB:"10/23/89",FlightInfo: "UA 87", AllergyInfo:"Gluten", id: '2'},
    {Firstname: "Singh", Lastname: "Singh", City: "Calgary", DOB:"10/23/89", FlightInfo: "BA 183", AllergyInfo:"None", id: '3'},
    {Firstname: "Sandeep", Lastname: "Auluck", City: "Fresno", DOB:"10/23/89", FlightInfo: "AI 183", AllergyInfo:"None", id: '1'},
    {Firstname: "Jatinder", Lastname: "Brar", City: "Surrey", DOB:"10/23/89",FlightInfo: "UA 87", AllergyInfo:"Gluten", id: '2'},
    {Firstname: "Satinder", Lastname: "Sangha", City: "Edmonton", DOB:"10/23/89", FlightInfo: "BA 183", AllergyInfo:"None", id: '3'},
    {Firstname: "Navdeep", Lastname: "Sabhi", City: "Toronto", DOB:"10/23/89", FlightInfo: "AI 183", AllergyInfo:"None", id: '1'},
    {Firstname: "Deep", Lastname: "Sarao", City: "Walsall", DOB:"10/23/89",FlightInfo: "UA 87", AllergyInfo:"Gluten", id: '2'},
    {Firstname: "Hardeep", Lastname: "Sidhu", City: "Paris", DOB:"10/23/89", FlightInfo: "BA 183", AllergyInfo:"None", id: '3'},
    {Firstname: "Palwinder", Lastname: "Bhullar", City: "Germany", DOB:"10/23/89", FlightInfo: "AI 183", AllergyInfo:"None", id: '1'},
    {Firstname: "Manwinder", Lastname: "Cheema", City: "Kuala Lampur", DOB:"10/23/89",FlightInfo: "UA 87", AllergyInfo:"Gluten", id: '2'},
    {Firstname: "Sukhbir", Lastname: "Singh", City: "Melbourne", DOB:"10/23/89", FlightInfo: "BA 183", AllergyInfo:"None", id: '3'},
    {Firstname: "Sandeep", Lastname: "Kaur", City: "Te Puke", DOB:"10/23/89", FlightInfo: "AI 183", AllergyInfo:"None", id: '1'},
    {Firstname: "Amanjodh", Lastname: "Kaur", City: "Indianapolis", DOB:"10/23/89",FlightInfo: "UA 87", AllergyInfo:"Gluten", id: '2'},
    {Firstname: "Singh", Lastname: "Singh", City: "Detriot", DOB:"10/23/89", FlightInfo: "BA 183", AllergyInfo:"None", id: '3'},
    {Firstname: "Manjodh", Lastname: "Chahal", City: "New York", DOB:"10/23/89", FlightInfo: "AI 183", AllergyInfo:"None", id: '1'},
    {Firstname: "Amanjodh", Lastname: "Kaur", City: "Toronto", DOB:"10/23/89",FlightInfo: "UA 87", AllergyInfo:"Gluten", id: '2'},
    {Firstname: "Singh", Lastname: "Singh", City: "Fresno", DOB:"10/23/89", FlightInfo: "BA 183", AllergyInfo:"None", id: '3'},
];


export const hostColumns = [
    { field: "HostFirstName", sortable: true, filter: true },
    { field: "HostLastName" },
    { field: "City", sortable: true, filter: true },
    { field: "canHoldSangat", cellStyle: params => {if(params.value==='Yes') {return {color: 'green'};} return {color: 'red'}}},
    { field: "HowManyBedsRemaining", cellStyle: params => {if(params.value==='0') {return {color: 'red'};} return {color: 'green'}}},
    { field: "DistanceFromDarbarSahib"},
]


export const hostMockdata = [
        {HostFirstName: "Manjodh", HostLastName: "Chahal", City: "Surrey", canHoldSangat:"Yes", HowManyBedsRemaining: "3", DistanceFromDarbarSahib:"None", id: '1'},
        {HostFirstName: "Aman", HostLastName: "Chahal", City: "Surrey", canHoldSangat:"Yes", HowManyBedsRemaining: "5", DistanceFromDarbarSahib:"None", id: '1'},
        {HostFirstName: "Surinder", HostLastName: "singh", City: "Delta", canHoldSangat:"No", HowManyBedsRemaining: "0", DistanceFromDarbarSahib:"None", id: '1'},
        {HostFirstName: "Tanveer", HostLastName: "singh", City: "Langley", canHoldSangat:"Yes", HowManyBedsRemaining: "83", DistanceFromDarbarSahib:"None", id: '1'},
        {HostFirstName: "Manjodh", HostLastName: "Chahal", City: "Richmond", canHoldSangat:"Yes", HowManyBedsRemaining: "2", DistanceFromDarbarSahib:"None", id: '1'},
        {HostFirstName: "Manjodh", HostLastName: "Chahal", City: "New Westminster", canHoldSangat:"Yes", HowManyBedsRemaining: "5", DistanceFromDarbarSahib:"None", id: '1'},
        {HostFirstName: "Manjodh", HostLastName: "Chahal", City: "Surrey", canHoldSangat:"Yes", HowManyBedsRemaining: "3", DistanceFromDarbarSahib:"None", id: '1'},
        {HostFirstName: "Manjodh", HostLastName: "Chahal", City: "Delta", canHoldSangat:"No", HowManyBedsRemaining: "0", DistanceFromDarbarSahib:"None", id: '1'},
        {HostFirstName: "Manjodh", HostLastName: "Chahal", City: "White Rock", canHoldSangat:"No", HowManyBedsRemaining: "10", DistanceFromDarbarSahib:"None", id: '1'},

]


export const sangatStayatHostMockData = [
    {Firstname: "Manjodh", Lastname: "Chahal", City: "Fresno", DOB:"10/23/89", FlightInfo: "AI 183", AllergyInfo:"None", RoomType: 'Gadda', AccomodationAllocated: 'Yes'},
    {Firstname: "Japneet", Lastname: "Singh", City: "Toronto", DOB:"12/13/95", FlightInfo: "UA 95", AllergyInfo:"None", RoomType: 'Gadda', AccomodationAllocated: 'Yes'},
    {Firstname: "Jaswinder", Lastname: "Brar", City: "Surrey", DOB:"05/22/65", FlightInfo: "CA 134", AllergyInfo:"Lactose", RoomType: 'Room', AccomodationAllocated: 'Yes'},
    {Firstname: "Amarinder", Lastname: "Khangura", City: "Surrey", DOB:"09/13/96", FlightInfo: "DEL 183", AllergyInfo:"None", RoomType: 'Gadda', AccomodationAllocated: 'No'},
]

export const sangatStayatHostColumns = [
    { field: "Firstname", sortable: true, filter: true },
    { field: "Lastname" },
    { field: "City", sortable: true, filter: true },
    { field: "RoomType"},
    { field: "AccomodationAllocated", cellStyle: params => {if(params.value==='No') {return {color: 'red'};} return {color: 'green'}}},
]

export const sangatVistingAsthan = [
    { field: "user_firstName", sortable: true, filter: true },
    { field: "user_lastName", sortable: true, filter: true },
    { field: "user_city", sortable: true, filter: true },
    { field: "user_yearOfBirth", sortable: true, filter: true },
    { field: "user_country", sortable: true, filter: true},
    { field: "user_phoneNumber", sortable: true, filter: true},
    { field: "user_hasAllergy", sortable: true, filter: true},
]

export const sangatMeetingBabaJiMock = [
    {Firstname: "Manjodh", Lastname: "Chahal", City: "Fresno", AppointmentDate: "07/19/22", PhoneNumber: '5593931823'},
    {Firstname: "Manjit", Lastname: "Singh", City: "Clovis", AppointmentDate: "07/19/22", PhoneNumber: '5593021921'},
    {Firstname: "Gurmeet", Lastname: "Brar", City: "Fowler", AppointmentDate: "07/21/22", PhoneNumber: '8180283823'},
    {Firstname: "Karan", Lastname: "Singh", City: "Fremont", AppointmentDate: "07/22/22", PhoneNumber: '5103929392'},
    {Firstname: "Sukhwinder", Lastname: "Dhaliwal", City: "Fresno", AppointmentDate: "07/23/22", PhoneNumber: '5593931823'}
];


export const sangatVistingGurpurab = [
    { field: "user_firstName", headerName: "First Name", sortable: true, filter: true },
    { field: "user_middleName", headerName: "Middle Name", sortable: true, filter: true },
    { field: "user_lastName", headerName: "Last Name", sortable: true, filter: true },
    { field: "user_age", headerName: "Age", sortable: true, filter: true, valueGetter: (data) => calculateAge(data)},
    { field: "user_city", headerName: "City", sortable: true, filter: true },
    { field: "user_country", headerName: "Country", sortable: true, filter: true},
    { field: "user_goingToAsthan", headerName: "Closest Asthan", sortable: true, filter: true},
    { field: "user_ride_from_airport", headerName: "Ride", sortable: true, filter: true},
    { field: "user_arrivingFlightDate", headerName: "Arriving Date", sortable: true, filter: true},
    { field: "user_arrivingFlightTime", headerName: "Arriving Time", sortable: true, filter: true},
    { field: "user_arrivingFlightAirport", headerName: "Arriving Airport Name", sortable: true, filter: true},
    { field: "user_arrivingFlightName", headerName: "Arriving Airline Name", sortable: true, filter: true},
    { field: "user_arrivingFlightNumber", headerName: "Arriving Flight #", sortable: true, filter: true},
    { field: "updatedAt", headerName: "Last updated by (UTC Timezone)", sortable: true, filter: true},
    { field: "user_last_updated_by", headerName: "Last updated by", sortable: true, filter: true},
    // {field: "user_family_identified", headerName: "Family Grouping Iden", filter: true, sortable: true},
    { field: "user_phoneNumber", headerName: "Phone Number", sortable: true, filter: true},
    { field: "user_departingFlightNumber", headerName: "Return Flight #", sortable: true, filter: true},
    { field: "user_departingFlightName", headerName: "Return Airline Name", sortable: true, filter: true},
    { field: "user_departingFlightAirport", headerName: "Return Airport Name", sortable: true, filter: true},
    { field: "user_departingFlightDate", headerName: "Return Airport Date", sortable: true, filter: true},
    { field: "user_departingFlightTime", headerName: "Return Time", sortable: true, filter: true},
    { field: "user_email", headerName: "Email", sortable: true, filter: true},
    { field: "user_comments", headerName: "Comments", sortable: true, filter: true, resizable: true},
    { field: "user_emergencyContact", headerName: "Emergency Contact", sortable: true, filter: true, resizable: true},
    { field: "user_state",width: 100, headerName: "State", sortable: true, filter: true },
    { field: "user_gender", headerName: "Gender", sortable: true, filter: true },
]

export const arrivalReport = [
    { field: "user_firstName", headerName: "First Name", sortable: true, filter: true },
    { field: "user_middleName", headerName: "Middle Name", sortable: true, filter: true },
    { field: "user_lastName", headerName: "Last Name", sortable: true, filter: true },
    { field: "user_phoneNumber", headerName: "Phone Number", sortable: true, filter: true},
    { field: "user_gender", headerName: "Gender", sortable: true, filter: true },
    { field: "user_age", headerName: "Age", sortable: true, filter: true, valueGetter: (data) => calculateAge(data)},
    { field: "user_city", headerName: "City", sortable: true, filter: true },
    { field: "user_country", headerName: "Country", sortable: true, filter: true},
    { field: "user_goingToAsthan", headerName: "Closest Asthan", sortable: true, filter: true},
    { field: "user_ride_from_airport", headerName: "Ride", sortable: true, filter: true},
    { field: "user_arrivingFlightDate", headerName: "Arriving Date", sortable: true, filter: true},
    { field: "user_arrivingFlightTime", headerName: "Arriving Time", sortable: true, filter: true},
    { field: "user_arrivingFlightAirport", headerName: "Arriving Airport Name", sortable: true, filter: true},
    { field: "user_arrivingFlightName", headerName: "Arriving Airline Name", sortable: true, filter: true},
    { field: "user_arrivingFlightNumber", headerName: "Arriving Flight #", sortable: true, filter: true},
    { field: "updatedAt", headerName: "Last updated by (UTC Timezone)", sortable: true, filter: true, valueGetter: (data) => formatDatetTime(data)}
]

export const taxiReport = [
    { field: "user_arrivingFlightAirport", width: 150, headerName: "Arriving Airport Name", sortable: true, filter: true},
    { field: "user_arrivingFlightDate", width: 150, headerName: "Arriving Date", sortable: true, filter: true},
    { field: "user_arrivingFlightTime", width: 150, headerName: "Arriving Time", sortable: true, filter: true},
    { field: "user_arrivingFlightName", width: 150,  headerName: "Arriving Airline Name", sortable: true, filter: true},
    { field: "user_arrivingFlightNumber", width: 150, headerName: "Arriving Flight #", sortable: true, filter: true},
    { field: "user_firstName", width: 140, headerName: "First Name", sortable: true, filter: true },
    { field: "user_middleName", width: 100, headerName: "Middle Name", sortable: true, filter: true },
    { field: "user_lastName", width: 100,headerName: "Last Name", sortable: true, filter: true },
    { field: "user_age", width: 75, headerName: "Age", sortable: true, filter: true, valueGetter: (data) => calculateAge(data)},
    { field: "user_city", width: 140, headerName: "City", sortable: true, filter: true },
    { field: "user_country", width: 100, headerName: "Country", sortable: true, filter: true},
    { field: "user_ride_from_airport", width: 85, headerName: "Ride", sortable: true, filter: true},
    { field: "", headerName: "Taxi arranged", sortable: true, filter: true },
    { field: "updatedAt", headerName: "Last updated by", sortable: true, filter: true, valueGetter: (data) => formatDatetTime(data)},
]

export const dailyReport = [
    { field: "user_arrivingFlightDate", width: 150, headerName: "Arriving Date", sortable: true, filter: true},
    { field: "user_arriving", width: 150, headerName: "Sangat Arriving", sortable: true, filter: true, valueGetter: (data)=>countTotal(data)}
]


export const returnSangatReport = [
    { field: "user_departingFlightNumber", headerName: "Return Flight #", sortable: true, filter: true},
    { field: "user_departingFlightName", headerName: "Return Airline Name", sortable: true, filter: true},
    { field: "user_departingFlightAirport", headerName: "Return Airport Name", sortable: true, filter: true},
    { field: "user_departingFlightDate", headerName: "Return Airport Date", sortable: true, filter: true},
    { field: "user_departingFlightTime", headerName: "Return Time", sortable: true, filter: true},
    { field: "updatedAt", headerName: "Last updated by (UTC Timezone)", sortable: true, filter: true, valueGetter: (data) => formatDatetTime(data)},
    { field: "user_firstName", headerName: "First Name", sortable: true, filter: true },
    { field: "user_middleName", headerName: "Middle Name", sortable: true, filter: true },
    { field: "user_lastName", headerName: "Last Name", sortable: true, filter: true },
    { field: "user_gender", headerName: "Gender", sortable: true, filter: true },
    { field: "user_age", headerName: "Age", sortable: true, filter: true, valueGetter: (data) => calculateAge(data) },
    { field: "user_city", headerName: "City", sortable: true, filter: true },
    { field: "user_country", headerName: "Country", sortable: true, filter: true},
    { field: "user_phoneNumber", headerName: "Phone Number", sortable: true, filter: true},
    { field: "user_email", headerName: "Email", sortable: true, filter: true},
    { field: "user_comments", headerName: "Comments", sortable: true, filter: true, resizable: true},
    { field: "user_emergencyContact", headerName: "Emergency Contact", sortable: true, filter: true, resizable: true},
    { field: "user_state",width: 100, headerName: "State", sortable: true, filter: true },
]


