let result = "";
let firstNum = "";
let secondNum = "";
let lastOp = "";
let resultInBaseTen = "";

const numsAndOps = (e) => {
  let btn = e.target || e.srcElement;
  if (btn.innerHTML != 0 && btn.innerHTML != 1 && btn.innerHTML != "=") {
    lastOp = btn.innerHTML;
  }
  result += document.getElementById(btn.id).innerHTML;
  document.getElementById("res").innerHTML = result;
};
const clear = () => {
  result = "";
  lastOp = "";
  firstNum = "";
  secondNum = "";
  document.getElementById("res").innerHTML = result;
};

const equal = () => {
  firstNum = document.getElementById("res").innerHTML.split(lastOp)[0];
  secondNum = document.getElementById("res").innerHTML.split(lastOp)[1];
  resultInBaseTen = eval(
    parseInt(firstNum, 2) + lastOp + parseInt(secondNum, 2)
  );

  document.getElementById("res").innerHTML = Math.floor(
    resultInBaseTen.toString(2)
  );
};

document.querySelectorAll(".showInRes").forEach((btn) => {
  btn.addEventListener("click", numsAndOps);
});
document.getElementById("btnClr").addEventListener("click", clear);
document.getElementById("btnEql").addEventListener("click", equal);
