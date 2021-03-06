
const appointments = [{id: 1,
  date: "2022-09-10",
  description: "Broken Toe.",
  user_id: 1,
  doctor_id: 1,
},
  {id: 2,
  date: "2021-10-06",
  description: "Brain Damage",
  user_id: 1,
  doctor_id: 2,},
  {id: 3,
  date: "2022-03-01",
  description: "Heart Attack",
  user_id: 1,
  doctor_id: 3,},
 {
  id: 4,
  date: "2022-08-19",
  description: "Fever",
  user_id: 1,
  doctor_id: 4,},
 {id: 5,
  date: "2022-04-07",
  description: "COVID",
  user_id: 1,
  doctor_id: 5,},
 { id: 6,
  date: "2021-12-07",
  description: "Broken Toe.",
  user_id: 2,
  doctor_id: 1,},
 {id: 7,
  date: "2022-01-09",
  description: "Brain Damage",
  user_id: 2,
  doctor_id: 2,},
 {id: 8,
  date: "2021-10-05",
  description: "Heart Attack",
  user_id: 2,
  doctor_id: 3,},
 {id: 9,
  date: "2021-10-26",
  description: "Fever",
  user_id: 2,
  doctor_id: 4,},
 {id: 10,
  date: "2022-09-21",
  description: "COVID",
  user_id: 2,
  doctor_id: 5,
 },
 {id: 11,
  date: "2022-04-11",
  description: "Broken Toe.",
  user_id: 3,
  doctor_id: 1,},
 {
  id: 12,
  date: "2022-05-04",
  description: "Brain Damage",
  user_id: 3,
  doctor_id: 2,},
{ id: 13,
  date: "2022-09-19",
  description: "Heart Attack",
  user_id: 3,
  doctor_id: 3,},
 { id: 14,
  date: "2022-04-26",
  description: "Fever",
  user_id: 3,
  doctor_id: 4,},
 {id: 15,
  date: "2022-01-18",
  description: "COVID",
  user_id: 3,
  doctor_id: 5,},
 {id: 16,
  date: "2022-04-13",
  description: "Broken Toe.",
  user_id: 4,
  doctor_id: 1,},
 {id: 17,
  date: "2022-06-08",
  description: "Brain Damage",
  user_id: 4,
  doctor_id: 2,},
 {id: 18,
  date: "2022-09-07",
  description: "Heart Attack",
  user_id: 4,
  doctor_id: 3,
 }]

const doctors =  [{ 
  id: 1,
  first_name: "Miles",
  last_name: "Adams",
  specialty: "Pediatrics",
},
{ id: 2,
  first_name: "Annett",
  last_name: "Auer",
  specialty: "Radiology",},
  {id: 3,
  first_name: "Britteny",
  last_name: "Lindgren",
  specialty: "Cardiology",},
 {id: 4,
  first_name: "Cherryl",
  last_name: "Schamberger",
  specialty: "General",},
 {id: 5,
  first_name: "Nicky",
  last_name: "Hartmann",
  specialty: "Family Medicine",},
 {id: 6,
  first_name: "Brain",
  last_name: "Roob",
  specialty: "Pediatrics",},
 {id: 7,
  first_name: "Asa",
  last_name: "Abshire",
  specialty: "Radiology",},
 {id: 8,
  first_name: "Ardith",
  last_name: "Lebsack",
  specialty: "Cardiology",},
 {id: 9,
  first_name: "Robbie",
  last_name: "Kuhn",
  specialty: "General",},
 {id: 10,
  first_name: "Casandra",
  last_name: "Daniel",
  specialty: "Family Medicine",}
]



 const users = [{
  id: 4,
  first_name: "Chuck",
  last_name: "Smith",
  age: 45,
  gender: "M",},
 {id: 1,
  first_name: "Julie",
  last_name: "F",
  age: 55,
  gender: "F",},
 {id: 6,
  first_name: "Britany",
  last_name: "Flatley",
  age: 57,
  gender: "m",},
 {id: 7,
  first_name: "Selene",
  last_name: "Howell",
  age: 86,
  gender: "m",},
{
  id: 8,
  first_name: "Enrique",
  last_name: "Crist",
  age: 43,
  gender: "f",},

  {id: 3,
  first_name: "Mary",
  last_name: "Cary",
  age: 33,
  gender: "M",},
 { id: 2,
  first_name: "Guy",
  last_name: "Harvey",
  age: 66,
  gender: "M",},
 {
  id: 5,
  first_name: "Harry",
  last_name: "Martin",
  age: 33,
  gender: "M",}]


// {name: user.first_name user.last_name, 
//  appointments: [
//    doctor: first_name last_name, reason: description, date: date
//  ]}


const apptUser = () => {
  return users.map((u)=> {
    let user_appointments = appointments.filter((a)=> u.id === a.user_id)
    let appt_details = user_appointments.map((a) => {
      let doctor = doctors.find((d)=> a.doctor_id === d.id)
      return {docFirstName: doctor.first_name, docLastName: doctor.last_name, date: a.date, description: a.description}
    })
  })
}
console.log(apptUser());