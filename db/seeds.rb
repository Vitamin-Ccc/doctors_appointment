# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "faker"
require "database_cleaner"

d1 = Doctor.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, specialty: "Pediatrics")
d2 = Doctor.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, specialty: "Radiology")
d3 = Doctor.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, specialty: "Cardiology")

# Skills could also be a homework with a grade
d4 = Doctor.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, specialty: "General")
d5 = Doctor.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, specialty: "Family Medicine")

5.times do |i|
  puts i
  user = User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, age: rand(0...100), gender: Faker::Gender.short_binary_type)

  Appointment.create(user_id: user.id, doctor_id: d1.id, date: Faker::Date.between(from: '2021-09-23', to: '2022-09-25'), description: "Broken Toe.")
  Appointment.create(user_id: user.id, doctor_id: d2.id, date: Faker::Date.between(from: '2021-09-23', to: '2022-09-25'), description: "Brain Damage")
  Appointment.create(user_id: user.id, doctor_id: d3.id, date: Faker::Date.between(from: '2021-09-23', to: '2022-09-25'), description: "Heart Attack")
  Appointment.create(user_id: user.id, doctor_id: d4.id, date: Faker::Date.between(from: '2021-09-23', to: '2022-09-25'), description: "Fever")
  Appointment.create(user_id: user.id, doctor_id: d5.id, date: Faker::Date.between(from: '2021-09-23', to: '2022-09-25'), description: "COVID")
end

puts Doctor.all.length
puts User.all.length
puts Appointment.all.length