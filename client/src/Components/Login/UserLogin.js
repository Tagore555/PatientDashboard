import React, { useState, useEffect } from "react";
import axios from "axios";

function Login() {
  const [patient_name, setName] = useState("");
  const [patient_age, setAge] = useState("");
  const [patient_phone, setPhone] = useState("");
  const [patient_email, setEmail] = useState("");
  const [patient_address, setAddress] = useState("");
  const [patient_username, setUsername] = useState("");
  const [patient_password, setPassword] = useState("");
  const [doctorList, setDoctorList] = useState([]);
  const [doctor_id, setSelectedDoctorId] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/doctorList")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setDoctorList(response.data);
          console.log(response.data);
        } else {
          console.error("Expected array, got:", typeof response.data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    const newUserData = {
      patient_name,
      patient_age,
      patient_phone,
      patient_email,
      patient_address,
      patient_username,
      patient_password,
      doctor_id: doctor_id,
    };

    try {
      await axios.post("http://localhost:5000/userList", newUserData);
      // Reset form fields
      setName("");
      setAge("");
      setPhone("");
      setEmail("");
      setAddress("");
      setUsername("");
      setPassword("");
      setSelectedDoctorId("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div class="login-outer-divhi">
        <div class="div-main">
          <form onSubmit={submit}>
            <div class="in-column-outer">
              <div class="outer-deatils">
                <div class="inner-submit">User Registration Form</div>
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
                    <div class="label-inner">Phone :</div>
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
                    <div class="label-inner">Select Doctor :</div>
                  </div>
                </div>
                <div class="in-row">
                  <div class="input-outer">
                    <div class="input-inner">
                      <input
                        type="text"
                        name="patientName"
                        value={patient_name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="input-outer">
                    <div class="input-inner">
                      <input
                        type="number"
                        name="patientAge"
                        value={patient_age}
                        onChange={(e) => setAge(e.target.value)}
                      />
                    </div>
                  </div>

                  <div class="input-outer">
                    <div class="input-inner">
                      <input
                        type="number"
                        name="patientPhone"
                        value={patient_phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="input-outer">
                    <div class="input-inner">
                      <input
                        type="email"
                        name="patientEmail"
                        value={patient_email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div class="input-outer">
                    <div class="input-inner">
                      <input
                        type="text"
                        name="patientAddress"
                        value={patient_address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="input-outer">
                    <div class="input-inner">
                      <input
                        type="text"
                        name="patientUsername"
                        value={patient_username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                  </div>

                  <div class="input-outer">
                    <div class="input-inner">
                      <input
                        type="password"
                        name="patientPassword"
                        value={patient_password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="input-outer">
                    <div class="input-inner">
                      <select
                        value={doctor_id}
                        onChange={(e) => setSelectedDoctorId(e.target.value)}
                      >
                        <option value="">Select a doctor</option>
                        <option value="">Id-Name-Depart-Spec</option>
                        {doctorList.map((doctor) => (
                          <option
                            key={doctor.doctor_id}
                            value={doctor.doctor_id}
                            required
                          >
                             {doctor.doctor_id} - {doctor.doctor_name} - {doctor.doctor_department} - {doctor.doctor_specialization}
                          </option>
                        ))}
                      </select>
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

export default Login;
