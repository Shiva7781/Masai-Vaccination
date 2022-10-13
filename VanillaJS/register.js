let myRegisterDataArr =
  JSON.parse(localStorage.getItem("myRegisterData")) || [];

function registerData() {
  //   e.preventDefault();

  let Unique_id = document.getElementById("unique_id").value;
  let Name = document.getElementById("name").value;
  let Age = document.getElementById("age").value;
  let Designation = document.getElementById("designation").value;

  let Priority = document.getElementById("priority").value;
  let Vaccine = document.getElementById("vaccine").value;

  let myRegisterData = {
    Unique_id: Unique_id,
    Name: Name,
    Age: Age,
    Designation: Designation,
    Priority: Priority,
    Vaccine: Vaccine,
  };
  myRegisterDataArr.push(myRegisterData);

  localStorage.setItem("myRegisterData", JSON.stringify(myRegisterDataArr));

  window.location.href = "dashboard.html";
}
