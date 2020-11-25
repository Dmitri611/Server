

const btnLogin = document.getElementById('btn-login');

btnLogin.addEventListener('click',function() {
    console.log('jh');
    const login = document.getElementById('login');
    const password = document.getElementById('password');
    const data = {login,password};
    
    axios.post('dfdfsfsd', data);
},false);

