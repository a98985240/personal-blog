function login() {
    var username = document.getElementById("username");
    var pass = document.getElementById("password");
    if (username.value == "") {
    alert("請輸入使用者名稱");
    } else if (pass.value  == "") {
    alert("請輸入密碼");
    } else if(username.value == "admin" && pass.value == "123456"){
    alert("Welcome!")
    window.location.href="welcome.html";
    } else {
    alert("帳號或密碼錯誤！")
    }
    }