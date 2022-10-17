import React, { useState } from "react";
import "./Style.css";

const Vaccination = () => {
  // eslint-disable-next-line
  const vaccinated = JSON.parse(localStorage.getItem("vaccinated")) || [];
  // console.log("vaccinated:", vaccinated);

  const [displayVaccinated, setDisplayVaccinated] = useState([...vaccinated]);

  const filterVaccine = () => {
    // console.log("Vaccine");
    // console.log("displayVaccinated:", displayVaccinated);

    let Sorted_Vaccine = displayVaccinated.sort(function (a, b) {
      if (a["vaccine"] < b["vaccine"]) return -1;
      if (a["vaccine"] > b["vaccine"]) return 1;
      return 0;
    });

    // console.log("Sorted_Vaccine:", Sorted_Vaccine);
    setDisplayVaccinated([...Sorted_Vaccine]);
  };

  const filterAge = () => {
    // console.log("Age");
    // console.log("displayVaccinated:", displayVaccinated);

    let Sorted_Age = displayVaccinated.sort(function (a, b) {
      if (a["age"] < b["age"]) return -1;
      if (a["age"] > b["age"]) return 1;
      return 0;
    });

    // console.log("Sorted_Age:", Sorted_Age);
    setDisplayVaccinated([...Sorted_Age]);
  };

  const filterPriority = () => {
    // console.log("Priority");
    // console.log("displayVaccinated:", displayVaccinated);

    let Sorted_Priority = displayVaccinated.sort(function (a, b) {
      a["priority"].split("");
      b["priority"].split("");

      if (a["priority"][1] < b["priority"][1]) return -1;
      if (a["priority"][1] > b["priority"][1]) return 1;
      return 0;
    });

    // console.log("Sorted_Priority:", Sorted_Priority);
    setDisplayVaccinated([...Sorted_Priority]);
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
          </tr>

          {displayVaccinated &&
            displayVaccinated.map((e, ind) => {
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
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Vaccination;
