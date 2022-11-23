let data = [];

function login() {
    let username = document.getElementById("name").value;
    let pass = document.getElementById("Password").value;


    if (username == "Sujeet" && pass == "321") {
       location.assign("http://127.0.0.1:5500/l.html");
    }
    else if (username == "Sujeet" && pass != "") {
        alert("Invailed Password");
    }
    else if (username != "" && pass == "321") {
        alert("Invailed username");
    }
    else if (username != "" && pass != "") {
        alert("Invailed username and  Password");
    } else if (username != "") {
        alert("Invailed username");
    }
    else if (pass != "") {
        alert("Invailed Password")
    }
    else {
        alert("Invailed login");
    }

    let valuepass = {
        Name: username,
        password: pass,
    };
    data.push(valuepass);
    //  console.log(data)

};