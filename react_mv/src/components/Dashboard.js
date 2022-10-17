import React, { useState } from "react";
import "./Style.css";

const Dashboard = () => {
  // eslint-disable-next-line
  const registerData = JSON.parse(localStorage.getItem(`registerData`)) || [];
  // console.log("registerData:", registerData);

  const [displayData, setDisplayData] = useState([...registerData]);
  const [otpCheck, setOtpCheck] = useState(1);

  const DeleteBtn = (ind) => {
    // console.log(ind);

    /*
    Don't use removeItem() 
    as the name says removes the whole item from localStorage.
    Just do another setItem() to overwrite the old data.
    */

    registerData.splice(ind, 1);
    localStorage.setItem("registerData", JSON.stringify(registerData));

    // console.log("Delete / Vaccinate:", registerData);
    setDisplayData([...registerData]);
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
    // console.log("Vaccine");
    // console.log("displayData:", displayData);

    let Sorted_Vaccine = displayData.sort(function (a, b) {
      if (a["vaccine"] < b["vaccine"]) return -1;
      if (a["vaccine"] > b["vaccine"]) return 1;
      return 0;
    });

    // console.log("Sorted_Vaccine:", Sorted_Vaccine);
    setDisplayData([...Sorted_Vaccine]);
  };

  const filterAge = () => {
    // console.log("Age");
    // console.log("displayData:", displayData);

    let Sorted_Age = displayData.sort(function (a, b) {
      if (a["age"] < b["age"]) return -1;
      if (a["age"] > b["age"]) return 1;
      return 0;
    });

    // console.log("Sorted_Age:", Sorted_Age);
    setDisplayData([...Sorted_Age]);
  };

  const filterPriority = () => {
    // console.log("Priority");
    // console.log("displayData:", displayData);

    let Sorted_Priority = displayData.sort(function (a, b) {
      a["priority"].split("");
      b["priority"].split("");

      if (a["priority"][1] < b["priority"][1]) return -1;
      if (a["priority"][1] > b["priority"][1]) return 1;
      return 0;
    });

    // console.log("Sorted_Priority:", Sorted_Priority);
    setDisplayData([...Sorted_Priority]);
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
