const btnAddUser = document.getElementById("button-add");

btnAddUser.addEventListener("click", async () => {
  const firstName = document.getElementById("addName").value;
  const lastName = document.getElementById("addLastName").value;
  const subName = document.getElementById("addSubName").value;

  const group = document.getElementById("addUserGroup").value;

  const data = { firstName, lastName, subName, group };
  console.log(data);
  const res = await axios.post("http://localhost:3000/addUser", data);
});

const switchPage = document.getElementById("switchPage");

switchPage.addEventListener("click", async () => {
  window.location.href = 'http://localhost:3000/main';
});