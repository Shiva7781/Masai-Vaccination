import React, { useState, useEffect } from "react";
import "./Style.css";

const Vaccination = () => {
  // eslint-disable-next-line
  const vaccinated = JSON.parse(localStorage.getItem("vaccinated")) || [];
  // console.log("vaccinated:", vaccinated);

  const [displayVaccinated, setDisplayVaccinated] = useState([...vaccinated]);

  useEffect(() => {
    setDisplayVaccinated(vaccinated);
  }, [vaccinated]);

  const filterVaccine = () => {
    console.log("Vaccine");

    let sortedVaccine = displayVaccinated.sort((a, b) => {
      let vA = a.vaccine.toLowerCase();
      let vB = b.vaccine.toLowerCase();

      return vA - vB;
    });

    setDisplayVaccinated(sortedVaccine);
  };

  const filterAge = () => {
    console.log("Age");

    // displayVaccinated.sort((a, b) => {
    //   return setDisplayVaccinated(Number(a) - Number(b));
    // });

    console.log(displayVaccinated);
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
