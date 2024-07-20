import React, { useState } from "react";
import axios from "axios";

function DoctorLogin() {
  const [doctor_name, setDoctorName] = useState("");
  const [doctor_age, setDoctorAge] = useState("");
  const [doctor_phone, setDoctorPhone] = useState("");
  const [doctor_email, setDoctorEmail] = useState("");
  const [doctor_address, setDoctorAddress] = useState("");
  const [doctor_username, setDoctorUsername] = useState("");
  const [doctor_password, setDoctorPassword] = useState("");
  const [doctor_department, setDoctorDepartment] = useState("");
  const [doctor_qualification, setDoctorQualification] = useState("");
  const [doctor_specialization, setDoctorSpecialization] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Add your registration logic here, such as sending data to a backend API
    const formData = {
      doctor_name,
      doctor_age,
      doctor_phone,
      doctor_email,
      doctor_address,
      doctor_username,
      doctor_password,
      doctor_department,
      doctor_qualification,
      doctor_specialization,
    };
    try {
      await axios.post("http://localhost:5000/doctorList", formData);

      setDoctorName("");
      setDoctorAge("");
      setDoctorPhone("");
      setDoctorEmail("");
      setDoctorAddress("");
      setDoctorUsername("");
      setDoctorPassword("");
      setDoctorDepartment("");
      setDoctorQualification("");
      setDoctorSpecialization("");
    } catch (err) {
      console.log(err);
    }
    // Reset form fields after submission (optional)
  };

  return (
    <div>
      <div class="login-outer-divh">
        <div class="div-main">
          <form onSubmit={handleSubmit}>
            <div class="in-column-outer">
              <div class="outer-deatils">
                <div class="inner-submit">Doctor Registratio Form</div>
              </div>
              <div class="in-column-inner">
                <div class="in-row">
                  <div class="label-outer">
                    <div class="label-inner">Name:</div>
                  </div>
                  <div class="label-outer">
                    <div class="label-inner">Age :</div>
                  </div>

                  <div class="label-outer">
                    <div class="label-inner">Phone Number :</div>
                  </div>
                  <div class="label-outer">
                    <div class="label-inner">Email :</div>
                  </div>

                  <div class="label-outer">
                    <div class="label-inner">Address :</div>
                  </div>
                  <div class="label-outer">
                    <div class="label-inner">Username :</div>
                  </div>

                  <div class="label-outer">
                    <div class="label-inner">Password :</div>
                  </div>
                  <div class="label-outer">
                    <div class="label-inner">Department :</div>
                  </div>

                  <div class="label-outer">
                    <div class="label-inner">Qualification :</div>
                  </div>
                  <div class="label-outer">
                    <div class="label-inner">Specialization :</div>
                  </div>
                </div>
                <div class="in-row">
                  <div class="input-outer">
                    <div class="input-inner">
                      <input
                        type="text"
                        id="doctorName"
                        value={doctor_name}
                        onChange={(e) => setDoctorName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div class="input-outer">
                    <div class="input-inner">
                      <input
                        type="number"
                        id="doctorAge"
                        value={doctor_age}
                        onChange={(e) => setDoctorAge(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div class="input-outer">
                    <div class="input-inner">
                      <input
                        type="tel"
                        id="doctorPhone"
                        value={doctor_phone}
                        onChange={(e) => setDoctorPhone(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div class="input-outer">
                    <div class="input-inner">
                      <input
                        type="email"
                        id="doctorEmail"
                        value={doctor_email}
                        onChange={(e) => setDoctorEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div class="input-outer">
                    <div class="input-inner">
                      <input
                        type="text"
                        id="doctorAddress"
                        value={doctor_address}
                        onChange={(e) => setDoctorAddress(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div class="input-outer">
                    <div class="input-inner">
                      <input
                        type="text"
                        id="doctorUsername"
                        value={doctor_username}
                        onChange={(e) => setDoctorUsername(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div class="input-outer">
                    <div class="input-inner">
                      <input
                        type="password"
                        id="doctorPassword"
                        value={doctor_password}
                        onChange={(e) => setDoctorPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div class="input-outer">
                    <div class="input-inner">
                      <input
                        type="text"
                        id="doctorDepartment"
                        value={doctor_department}
                        onChange={(e) => setDoctorDepartment(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div class="input-outer">
                    <div class="input-inner">
                      <input
                        type="text"
                        id="doctorQualification"
                        value={doctor_qualification}
                        onChange={(e) => setDoctorQualification(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div class="input-outer">
                    <div class="input-inner">
                      <input
                        type="text"
                        id="doctorSpecialization"
                        value={doctor_specialization}
                        onChange={(e) =>
                          setDoctorSpecialization(e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="outer-submmit">
                <div class="inner-submit">
                  <input type="submit" value="Submit" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DoctorLogin;
