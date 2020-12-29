const switchPage = document.getElementById("switchPage");

switchPage.addEventListener("click", async () => {
  window.location.href = "http://localhost:3000/addStudent";
});

const btnUpdateScore = document.getElementById("updateScore");

btnUpdateScore.addEventListener("click", async () => {
  const id = document.getElementById("studentName").value;

  const subject = document.getElementById("subject").value;
  const score = document.getElementById("score").value;
  const group = document.getElementById("getUsers").value;

  const data = { id, subject, score, group };

  const res = await axios.post("http://localhost:3000/updateScore", data);
  await updateTable(group);
});

const btnGetUsers = document.getElementById("getUsers");

const updateTable = async (group) => {
  const query = `http://localhost:3000/getUsers?group=${group}`;
  const res = await axios.get(query);

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

    tbody.appendChild(tr);
    table.appendChild(tbody);
  });
};

btnGetUsers.addEventListener("change", async (e) => {
  if (e.target.value == 0) {
    return;
  }
  await updateTable(e.target.value);
});
