import React, { useEffect, useState } from "react";
import "./Style.css";

const Dashboard = () => {
  // eslint-disable-next-line
  const registerData = JSON.parse(localStorage.getItem(`registerData`)) || [];
  // console.log("registerData:", registerData);

  const [displayData, setDisplayData] = useState([...registerData]);
  const [otpCheck, setOtpCheck] = useState(1);

  useEffect(() => {
    setDisplayData(registerData);
  }, [registerData]);

  const DeleteBtn = (ind) => {
    // console.log(ind);

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
    // console.log(ind, "enter OTP");
    setOtpCheck(ind);

    let vaccinated = JSON.parse(localStorage.getItem("vaccinated")) || [];

    if (otpCheck) {
      alert(`${registerData[ind].name} Added to Queue`);

      setTimeout(() => {
        alert(`Vaccinating ${registerData[ind].vaccine}`);
      }, 3000);

      setTimeout(() => {
        alert(`${registerData[ind].name} Vaccinated`);

        vaccinated.push(registerData[ind]);

        localStorage.setItem("vaccinated", JSON.stringify(vaccinated));

        DeleteBtn(ind);
      }, 7000);
    } else {
      alert("Wrong OTP");
    }
  };

  const filterVaccine = () => {
    console.log("Vaccine");
  };

  const filterAge = () => {
    console.log("Age");
  };

  const filterPriority = () => {
    console.log("Priority");
  };

  return (
    <>
      <div className="Filter_Sort_btn">
        <button onClick={filterVaccine}>Filter by Vaccine</button>
        <button onClick={filterAge}>Sort by age</button>
        <button onClick={filterPriority}>Filter by Priority</button>
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
