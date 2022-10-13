var dashboardData = JSON.parse(window.localStorage.getItem("myRegisterData"));
// console.log("dashboardData:", dashboardData);
display(dashboardData);

function display(ele) {
  const container = document.querySelector("#dashboard");

  console.log(ele);

  ele.map((e) => {
    console.log(e.Designation);

    let table = document.createElement("tr");

    let unique = document.createElement("td");
    unique.innerHTML = e.Unique_id;

    let name = document.createElement("td");
    name.innerHTML = e.Name;

    let age = document.createElement("td");
    age.innerHTML = e.Age;

    let designation = document.createElement("td");
    designation.innerHTML = e.Designation;

    let priority = document.createElement("td");
    priority.innerHTML = e.Priority;

    let vaccine = document.createElement("td");
    vaccine.innerHTML = e.Vaccine;

    table.append(unique, name, age, designation, priority, vaccine);
    container.append(table);
  });
}
