export default function Open(){
    const passwordAlert = document.getElementById('passwordAlert')

    const login = {
        user: (document.getElementById('user') as HTMLInputElement).value,
        key: (document.getElementById('password') as HTMLInputElement ).value,
    }

    function clear(){
        const user = (document.getElementById('user') as HTMLInputElement).value = '';
        const key = (document.getElementById('password') as HTMLInputElement).value = '';
    }

    if(login.user == "admin" && login.key == 'admin'){
        const spanAlertGreen = document.createElement('span')
        window.open('http://portal-mbike.com.br/default/pages/home/index.php', '_self');
        spanAlertGreen.innerText = 'Usuário Válido'
        spanAlertGreen.className = 'alertGreen'
        passwordAlert?.append(spanAlertGreen)
        clear()
        setInterval(function(){
            passwordAlert?.removeChild(spanAlertGreen)
        }, 1000)
    }else if(login.user !== "" && login.key !== ""){
        const spanAlertRed1 = document.createElement('span')
        spanAlertRed1.innerText = 'Usuário ou Senha Inválida'
        spanAlertRed1.className = 'alertRed' 
        passwordAlert?.append(spanAlertRed1)
        clear()
        setInterval(function(){
            passwordAlert?.removeChild(spanAlertRed1)
        }, 1000)
    }else if(login.user == '' || login.key == ''){
        const spanAlertRed12 = document.createElement('span')
        spanAlertRed12.innerText = 'Preecha Todos os Campo'
        spanAlertRed12.className = 'alertRed'
        passwordAlert?.append(spanAlertRed12)
        clear()
        setInterval(function(){
            passwordAlert?.removeChild(spanAlertRed12)
        }, 1000)
    }
}