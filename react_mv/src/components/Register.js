import React, { useState } from "react";
import "./Style.css";

const Register = () => {
  const [data, setData] = useState({
    unique_id: "",
    name: "",
    age: "",
    designation: "Employee",
    priority: "p0",
    vaccine: "Covishield",
  });

  const SubmitForm = (e) => {
    e.preventDefault();
  };

  const RegisterData = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    // console.log(field, value);
    setData({ ...data, [field]: value });

    // console.log("data:", data);
  };

  /** Storing Data in localStorage */
  let registerData = JSON.parse(localStorage.getItem("registerData")) || [];
  console.log("registerData:", registerData);

  const lsData = () => {
    if (data.unique_id && data.name && data.age) {
      registerData.push(data);

      localStorage.setItem("registerData", JSON.stringify(registerData));
    } else {
      alert("Please Fill all field");
    }
  };

  return (
    <>
      <div className="Register">
        <form onSubmit={SubmitForm}>
          <label htmlFor="unique_id">Unique ID</label>
          <br />
          <input
            type="text"
            id="unique_id"
            name="unique_id"
            required
            placeholder="e.g. Shiva@7781"
            onChange={RegisterData}
          />
          <br />
          <br />

          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="e.g. Shiva V"
            onChange={RegisterData}
          />
          <br />
          <br />

          <label htmlFor="age">Age</label>
          <br />
          <input
            type="text"
            id="age"
            name="age"
            required
            placeholder="Enter here"
            onChange={RegisterData}
          />
          <br />
          <br />

          <label htmlFor="designation">Designation</label>
          <br />
          <select id="designation" name="designation" onChange={RegisterData}>
            <option>Employee</option>
            <option>Student</option>
          </select>
          <br />
          <br />

          <label htmlFor="priority">Priority</label>
          <br />
          <select id="priority" name="priority" onChange={RegisterData}>
            <option>p0</option>
            <option>p1</option>
            <option>p2</option>
            <option>p3</option>
          </select>
          <br />
          <br />

          <label htmlFor="vaccine">Vaccine</label>
          <br />
          <select id="vaccine" name="vaccine" onChange={RegisterData}>
            <option>Covishield</option>
            <option>Covaxin</option>
            <option>Sputnik</option>
          </select>
          <br />
          <br />

          <button type="submit" onClick={lsData}>
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
