import React, { useEffect, useState } from "react";
import "./Style.css";

const Dashboard = () => {
  const registerData = JSON.parse(localStorage.getItem(`registerData`)) || [];
  // console.log("registerData:", registerData);

  const [displayData, setDisplayData] = useState([...registerData]);
  const [otpCheck, setOtpCheck] = useState(1);

  useEffect(() => {
    setDisplayData(registerData);
  }, [registerData]);

  const DeleteBtn = (ind) => {
    console.log(ind);

    /*
    Don't use removeItem() 
    as the name says removes the whole item from localStorage.
    Just do another setItem() to overwrite the old data.
    */

    registerData.splice(ind, 1);
    localStorage.setItem("registerData", JSON.stringify(registerData));
  };

  // const verifyOTP = () => {
  //   console.log("verifyOTP");
  // };

  const VaccinateBtn = (ind) => {
    console.log(ind, "enter OTP");
    setOtpCheck(ind);

    
    let vaccinatedData =
      JSON.parse(localStorage.getItem("vaccinatedData")) || [];

    if (otpCheck) {
      alert(`${registerData[ind].name} Added to Queue`);

      setTimeout(() => {
        alert(`Vaccinating ${registerData[ind].vaccine}`);
      }, 3000);

      setTimeout(() => {
        alert(`${registerData[ind].name} Vaccinated`);

        vaccinatedData.push(registerData[ind]);

        localStorage.setItem("vaccinatedData", JSON.stringify(vaccinatedData));
      }, 7000);
    } else {
      alert("Wrong OTP");
    }
  };

  return (
    <>
      <div className="Filter_Sort_btn">
        <button>Filter by Vaccine</button>
        <button>Sort by age</button>
        <button>Filter by Priority</button>
      </div>
      <table className="TableData">
        <tbody>
          <tr className="Table_Title">
            <th>Unique ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Designation</th>
            <th>Priority</th>
            <th>Vaccine</th>
            <th>Delete</th>
            <th>Vaccinate</th>
            {/* <th>OTP</th> */}
          </tr>

          {displayData &&
            displayData.map((e, ind) => {
              const { unique_id, name, age, designation, priority, vaccine } =
                e;
              return (
                <tr key={ind}>
                  <td>{unique_id}</td>
                  <td>{name}</td>
                  <td>{age}</td>
                  <td>{designation}</td>
                  <td>{priority}</td>
                  <td>{vaccine}</td>

                  <td>
                    <button
                      className="DeleteBtn"
                      onClick={() => DeleteBtn(ind)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      className="VaccinateBtn"
                      onClick={() => VaccinateBtn(ind)}
                    >
                      Vaccinate
                    </button>
                  </td>

                  {/* <td className="OTP">
                    <input onChange={verifyOTP}></input>
                  </td> */}
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Dashboard;
