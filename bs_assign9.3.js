// login function script that will upload name, email and password to localStorage //

function myLogin (){
        var name = document.getElementById('name').value; 
        localStorage.setItem('name', name);
        myLogin();
}