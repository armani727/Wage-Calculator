// event listener
document.getElementById("btn").addEventListener("click", btnclicked);

// function
function btnclicked() {
  // input
  let money = +document.getElementById("wage").value;
  let time = +document.getElementById("hours").value;
  let overtime = +document.getElementById("overhours").value;

  //   process
  let income = money * time + overtime * 1.5 * money;

  //    output
  document.getElementById("output").innerHTML = income;
}
