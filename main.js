
const btnAddUser = document.getElementById('button-add');

btnAddUser.addEventListener('click', async() => {
    const name = document.getElementById('addName').value;
    const data = {name}
    const res = await axios.post("http://localhost:3000/addUser", data);
})

const btnUpdateScore = document.getElementById('updateScore');

btnUpdateScore.addEventListener('click', async() => {
    const id = document.getElementById('studentId').value;
    const subject = document.getElementById('subject').value;
    const score = document.getElementById('score').value;
    const data = {id,subject,score};
    console.log(data);
    const res = await axios.post("http://localhost:3000/updateScore", data);
})
