const inputeLogainEmail = document.querySelector("#inputeLogainEmail");
const inputeLogainPass = document.querySelector("#inputeLogainPass");
const btnLogain = document.querySelector("#btnLogain");
let data;

if (localStorage.getItem("test") == null) {
  data = [];
} else {
  data = JSON.parse(localStorage.getItem("test"));
}
console.log(localStorage.getItem("test"));

function logain() {
  if (localStorage.getItem("test") != null) {
    
    for (let i = 0; i < data.length; i++) {
      let x = JSON.parse(localStorage.getItem("test"));

      let cheakEmail = x[i].email;
      let cheakpass = x[i].pass;
      if (
        inputeLogainEmail.value == cheakEmail &&
        inputeLogainPass.value == cheakpass
      ) {
        window.location.href = `home.html`;
      } else{
        logainError.classList.remove("d-none")

      }
    }
  } 
  clearLogain();
}

function clearLogain() {
  inputeLogainEmail.value = null;
  inputeLogainPass.value = null;
}

inputeLogainEmail.addEventListener("input", function () {
  logainError.classList.add("d-none");
});

btnLogain.addEventListener("click", logain);
