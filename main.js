const btnAddUser = document.getElementById("button-add");

btnAddUser.addEventListener("click", async () => {
  const fullName = document.getElementById("addName").value;
  const arrFullName = fullName.split(" ");
  const firstName = arrFullName[0];
  const lastName = arrFullName[1];
  const subName = arrFullName[2];
  const group = document.getElementById("addUserGroup").value;

  const data = { firstName, lastName, subName, group };
  console.log(group);
  const res = await axios.post("http://localhost:3000/addUser", data);
});

const btnUpdateScore = document.getElementById("updateScore");

btnUpdateScore.addEventListener("click", async () => {
  const fullName = document.getElementById("studentName").value;
  const arrFullName = fullName.split(" ");
  const firstName = arrFullName[0];
  const lastName = arrFullName[1];
  const subName = arrFullName[2];
  const subject = document.getElementById("subject").value;
  const score = document.getElementById("score").value;
  const group = document.getElementById("updateScoreSelect").value;

  const data = { firstName, lastName, subName, subject, score, group };

  const res = await axios.post("http://localhost:3000/updateScore", data);
});

const btnGetUsers = document.getElementById("getUsers");

btnGetUsers.addEventListener("change", async (e) => {
  if (e.target.value == 0) {
    return;
  }
  const query = `http://localhost:3000/getUsers?group=${e.target.value}`;
  const res = await axios.get(query);

  console.log(res);

  const tbody = document.createElement("tbody");
  const table = document.getElementById("table");

  table.innerHTML = "";
  table.innerHTML = `
  <thead>
  <tr>
  <th scope="col">№</th>
  <th scope="col">Имя</th>
  <th scope="col">Фамилия</th>
  <th scope="col">Отчество</th>
  <th scope="col">Тау</th>
  <th scope="col">РГР ТАУ №1</th>
  <th scope="col">РГР ТАУ №2</th>
  <th scope="col">ПСП</th>
  <th scope="col">Курсовой проект ПСП</th>
  <th scope="col">Метрология</th>
  <th scope="col">ТМиП</th>
  <th scope="col">Физра</th>
  <th scope="col">ТП</th>
  <th scope="col">КСКР</th>
  <th scope="col">История</th>
  <th scope="col">БЗ</th>
</tr>
</thead>
`;

  res.data.forEach((element) => {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    th.scope = "row";
    th.innerText = element.Id;
    tr.appendChild(th);

    for (const [key, value] of Object.entries(element)) {
      if (key !== "Id") {
        const td = document.createElement("td");
        if (value !== null) {
          td.textContent = value;
        }
        tr.appendChild(td);
      }
    }
    console.log(tbody);
    tbody.appendChild(tr);
    table.appendChild(tbody);
    console.log(tbody);

  });
});
