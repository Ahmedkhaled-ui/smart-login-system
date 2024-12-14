const ChangePass = document.querySelector("#ChangePass");
const inputeEmailChangePass = document.querySelector("#inputeEmailChangePass");
const confirmChange = document.querySelector("#confirmChange");
const btnconfirmEmail = document.querySelector("#btnconfirmEmail");
const showChangePass = document.querySelector("#showChangePass");
const btnSave = document.querySelector("#btnSave");
let data;

if (localStorage.getItem("test") == null) {
  data = [];
} else {
  data = JSON.parse(localStorage.getItem("test"));
}

function changePass() {
  for (let i = 0; i < localStorage.length; i++) {
    if (
      inputeEmailChangePass.value ==
      JSON.parse(localStorage.getItem("test"))[i].email
    ) {
      showChangePass.classList.remove("d-none");
      btnconfirmEmail.classList.add("d-none");
      inputeEmailChangePass.setAttribute("readonly", true);
      inputeEmailChangePass.parentElement.classList.add("opacity-50");
    } else {
      inputeEmailChangePass.nextElementSibling.classList.remove("d-none");
    }
  }
}

function addNewPass() {
  const email = inputeEmailChangePass.value.trim();
  const userIndex = data.findIndex((user) => user.email === email);

  if (userIndex !== -1) {
    data[userIndex].pass = ChangePass.value;
    localStorage.setItem("test", JSON.stringify(data));
    alert("Password updated successfully!");
    clear();
  } else {
    alert("Passwords do not match or are invalid.");
  }
}
function clear() {
  ChangePass.classList.remove("is-valid");
  confirmChange.classList.remove("is-valid");
  ChangePass.value = null;
  confirmChange.value = null;
}

function valedate(element) {
  let regax = {
    ChangePass: /\w{6,9}/,
    confirmChange: /\w{6,9}/,
  };

  if (regax[element.id].test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    element.nextElementSibling.classList.add("d-none");
  } else {
    element.classList.remove("is-valid");
    element.classList.add("is-invalid");
    element.nextElementSibling.classList.remove("d-none");
  }
}

btnSave.addEventListener("click", changePass);

inputeEmailChangePass.addEventListener("input", function () {
  inputeEmailChangePass.nextElementSibling.classList.add("d-none");
});

btnconfirmEmail.addEventListener("click", changePass);
btnSave.addEventListener("click", function () {
  addNewPass();
  clear();
  window.location.href = "index.html";
});
ChangePass.addEventListener("input", function () {
  valedate(this);
});
confirmChange.addEventListener("input", function () {
  valedate(this);
});
