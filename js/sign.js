const inputeSignName = document.querySelector("#inputeSignName");
const inputeSignEmail = document.querySelector("#inputeSignEmail");
const inputeSignPass = document.querySelector("#inputeSignPass");
const inputeSignConfirm = document.querySelector("#inputeSignConfirm");
const btnSign = document.querySelector("#btnSign");
const popupSing = document.querySelector("#popupSing");
const rongSign = document.querySelector("#rongSign");
const closePopup = document.querySelector("#closePopup");

let data;

if (localStorage.getItem("test") == null) {
  data = [];
} else {
  data = JSON.parse(localStorage.getItem("test"));
}

function signUp() {


  if (inputeSignPass.value == inputeSignConfirm.value) {
    if (
      inputeSignName.classList.contains("is-valid") &&
      inputeSignEmail.classList.contains("is-valid") &&
      inputeSignPass.classList.contains("is-valid") &&
      inputeSignConfirm.classList.contains("is-valid")
    ) {
      let info = {
        person: inputeSignName.value,
        email: inputeSignEmail.value,
        pass: inputeSignPass.value,
      };
      if (inputeSignConfirm.value == inputeSignPass.value) {
        data.push(info);
        console.log(data);

        localStorage.setItem("test", JSON.stringify(data));

        inputeSignConfirm.classList.remove("is-invalid");
        popupSing.classList.remove("d-none");
      } else {
        inputeSignConfirm.classList.add("is-invalid");
      }
      clearSign();
    } else {
      rongSign.classList.remove("d-none");
    }
  } else {
    inputeSignConfirm.nextElementSibling.classList.remove("d-none");
  }
}

function clearSign() {
  inputeSignName.value = null;
  inputeSignEmail.value = null;
  inputeSignPass.value = null;
  inputeSignConfirm.value = null;
  inputeSignName.classList.remove("is-valid");
  inputeSignEmail.classList.remove("is-valid");
  inputeSignPass.classList.remove("is-valid");
  inputeSignConfirm.classList.remove("is-valid");
}

function valedateSign(element) {
  let regax = {
    inputeSignName: /^[A-Za-z0-9]{3,15}_[A-Za-z0-9]{3,15}$/,
    inputeSignEmail: /^[a-z0-9]{5,15}@gmail.com$/,
    inputeSignPass: /\w{6,9}/,
    inputeSignConfirm: /\w{6,9}/,
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

btnSign.addEventListener("click", signUp);

inputeSignName.addEventListener("input", function () {
  valedateSign(this);
  rongSign.classList.add("d-none");
  reEmail.classList.add("d-none");
});
inputeSignEmail.addEventListener("input", function () {
  valedateSign(this);
  reEmail.classList.add("d-none");
});
inputeSignPass.addEventListener("input", function () {
  valedateSign(this);
});
inputeSignConfirm.addEventListener("input", function () {
  valedateSign(this);
});

btn.addEventListener("click", function () {
  window.location.href = `index.html`;
});
closePopup.addEventListener("click", function () {
  popupSing.classList.add("d-none");
});
