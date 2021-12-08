class Appointment < ApplicationRecord
  belongs_to :user
  belongs_to :doctor
  def self.all_and_then_some
    appointments = Appointment.all
    appointments.map do |appointment|
      {id: appointment.id, date: appointment.date, description: appointment.description, user: appointment.user, doctor: appointment.doctor}
    end
  end
end
