let data = [];

function login() {
    let username = document.getElementById("name").value;
    let pass = document.getElementById("Password").value;

    
    if (username=="Sujeet" && pass=="321") {
        location.assign("http://127.0.0.1:5501/index.html");
    } else {
        alert("Invailed login");
    };

    let valuepass = {
        Name: username,
        password: pass,
    };
    data.push(valuepass);
    //  console.log(data)

};