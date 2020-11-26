const btnAddUser = document.getElementById("button-add");

btnAddUser.addEventListener("click", async () => {
  const name = document.getElementById("addName").value;
  const data = { name };
  const res = await axios.post("http://localhost:3000/addUser", data);
});

const btnUpdateScore = document.getElementById("updateScore");

btnUpdateScore.addEventListener("click", async () => {
  const id = document.getElementById("studentId").value;
  const subject = document.getElementById("subject").value;
  const score = document.getElementById("score").value;
  const data = { id, subject, score };

  const res = await axios.post("http://localhost:3000/updateScore", data);
});

const btnGetUsers = document.getElementById("getUsers");

btnGetUsers.addEventListener("click", async () => {
  const res = await axios.get("http://localhost:3000/getUsers");

  const table = document.getElementById("table");
  res.data.forEach((element) => {
    const tr = document.createElement("tr");
    for (const [key, value] of Object.entries(element)) {
      const td = document.createElement("td");
      if(value == null) {
        td.textContent = ' ';
      } else{
        td.textContent = `${value}`;
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);
  });
});
