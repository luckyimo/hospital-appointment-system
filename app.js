// Object Oriented Programming (OOP) in JavaScript

// Hospital Appointment System

// ─── Doctor Class ─────────────────────────────────────────────

class Doctor {
  static totalDoctors = 0;

  constructor(doctorId, name, availableSlots) {
    this.doctorId = doctorId;
    this.name = name;
    this.availableSlots = availableSlots;
    Doctor.totalDoctors++;
  }

  // Instance method
  bookAppointment() {
    if (this.availableSlots > 0) {
      this.availableSlots--;
      console.log(`Appointment booked with Dr. ${this.name}.`);
    } else {
      console.log(`Dr. ${this.name} has no available slots.`);
    }
  }

  // Instance method
  cancelAppointment() {
    this.availableSlots++;
    console.log(`Appointment cancelled with Dr. ${this.name}.`);
  }

  getDoctorInfo() {
    return `Dr. ${this.name} (${this.availableSlots} slots left)`;
  }

  // Static method
  static addSlots(doctor, slots) {
    doctor.availableSlots += slots;
    console.log(`Slots added. New slots: ${doctor.availableSlots}`);
  }
}


// ─── Patient Class ────────────────────────────────────────────

class Patient {
  static totalPatients = 0;

  constructor(patientId, name) {
    this.patientId = patientId;
    this.name = name;
    Patient.totalPatients++;
  }

  register() {
    console.log(`${this.name} (ID: ${this.patientId}) is registered.`);
  }

  book(doctor) {
    console.log(`${this.name} is booking an appointment...`);
    doctor.bookAppointment();
  }

  cancel(doctor) {
    console.log(`${this.name} is cancelling an appointment...`);
    doctor.cancelAppointment();
  }

  getPatientInfo() {
    return `${this.name} (ID: ${this.patientId})`;
  }
}


// ─── Usage ────────────────────────────────────────────────────

const doctor1 = new Doctor("DOC001", "Dr. Smith", 2);

const patient1 = new Patient("PAT001", "Lucky Imo");
const patient2 = new Patient("PAT002", "Ada Obi");
const patient3 = new Patient("PAT003", "John Musa");

patient1.register();
patient2.register();
patient3.register();

patient1.book(doctor1);
patient2.book(doctor1);
patient3.book(doctor1); // should show full

patient2.cancel(doctor1);

Doctor.addSlots(doctor1, 1);

patient3.book(doctor1);

console.log(doctor1.getDoctorInfo());

console.log(`Total doctors: ${Doctor.totalDoctors}`);
console.log(`Total patients: ${Patient.totalPatients}`);
