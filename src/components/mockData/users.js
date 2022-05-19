
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
