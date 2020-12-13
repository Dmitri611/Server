const btnLogin = document.getElementById("btn-login");

btnLogin.addEventListener(
  "click",
  async function () {
    const login = document.getElementById("login");
    const password = document.getElementById("password");
    const data = { login: login.value, password: password.value };
    const res = await axios.post("http://localhost:3000/login", data);
    if (res.data) {
      window.location.href = "main";
      
    } else {
      alert("неверный логин или пароль");
    }
  },
  false
);
