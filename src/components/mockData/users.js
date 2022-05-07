
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
    { field: "HostLastNameName" },
    { field: "City", sortable: true, filter: true },
    { field: "canHoldSangat", cellStyle: params => {if(params.value==='Yes') {return {color: 'green'};} return {color: 'red'}}},
    { field: "HowManyBedsRemaining"},
    { field: "DistanceFromDarbarSahib"},
]


export const hostMockdata = [
        {HostFirstName: "Manjodh", HostLastNameName: "Chahal", City: "Surrey", canHoldSangat:"Yes", HowManyBedsRemaining: "3", DistanceFromDarbarSahib:"None", id: '1'},
        {HostFirstName: "Aman", HostLastNameName: "Chahal", City: "Surrey", canHoldSangat:"Yes", HowManyBedsRemaining: "5", DistanceFromDarbarSahib:"None", id: '1'},
        {HostFirstName: "Surinder", HostLastNameName: "singh", City: "Delta", canHoldSangat:"No", HowManyBedsRemaining: "0", DistanceFromDarbarSahib:"None", id: '1'},
        {HostFirstName: "Tanveer", HostLastNameName: "singh", City: "Langley", canHoldSangat:"Yes", HowManyBedsRemaining: "83", DistanceFromDarbarSahib:"None", id: '1'},
        {HostFirstName: "Manjodh", HostLastNameName: "Chahal", City: "Richmond", canHoldSangat:"Yes", HowManyBedsRemaining: "2", DistanceFromDarbarSahib:"None", id: '1'},
        {HostFirstName: "Manjodh", HostLastNameName: "Chahal", City: "New Westminster", canHoldSangat:"Yes", HowManyBedsRemaining: "5", DistanceFromDarbarSahib:"None", id: '1'},
        {HostFirstName: "Manjodh", HostLastNameName: "Chahal", City: "Surrey", canHoldSangat:"Yes", HowManyBedsRemaining: "3", DistanceFromDarbarSahib:"None", id: '1'},
        {HostFirstName: "Manjodh", HostLastNameName: "Chahal", City: "Delta", canHoldSangat:"Yes", HowManyBedsRemaining: "0", DistanceFromDarbarSahib:"None", id: '1'},
        {HostFirstName: "Manjodh", HostLastNameName: "Chahal", City: "White Rock", canHoldSangat:"No", HowManyBedsRemaining: "10", DistanceFromDarbarSahib:"None", id: '1'},


]
