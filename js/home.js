
const logout = document.querySelector("#logout");
const inputeLogainEmail = document.querySelector("#inputLoginEmail");
let data = JSON.parse(localStorage.getItem("test")) || [];
 let deleteEmail = JSON.parse(localStorage.getItem("test"));


function welcome() {
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    if (true) {
      let userName = element.person;
      document.getElementById("mes").innerHTML = `
        <span class="small text-light">welcome</span>
        <h1 class="text-light text-center mb-4">${userName}</h1>`;
    }
  }
}

welcome();

logout.addEventListener("click", function () {
  window.location.href = `index.html`;
  for (let i = 0; i < localStorage.length; ++i) {
    deleteEmail.splice(i, 1);

    localStorage.setItem("test", JSON.stringify(deleteEmail));
  }
});
