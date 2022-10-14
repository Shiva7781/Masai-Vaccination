import React, { useState, useEffect } from "react";
import "./Style.css";

const Vaccination = () => {
  const vaccinatedData =
    JSON.parse(localStorage.getItem("vaccinatedData")) || [];
  // console.log("vaccinatedData:", vaccinatedData);

  const [displayVaccinated, setDisplayVaccinated] = useState([
    ...vaccinatedData,
  ]);

  useEffect(() => {
    setDisplayVaccinated(vaccinatedData);
  }, [vaccinatedData]);

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
