let persons = [{
    email: "",
    password: "123"
}]

function login_submit(){
     userEmail = document.getElementById("user_email").value;
     userPass = document.getElementById("user_pwd").value;

    
    

     users = persons.find(person => person.email === userEmail);
    
    if(users){
        
        alert("Login Successfully");
        console.log(users.email);   
        window.location.href="videosPage.html"
    }
    else{
        console.log("Invalid Email or Password");
    }
    
}


function signup() {
    userEmail = document.getElementById("user_email");

    if (userEmail.value != "") {
        result = persons.find(obj => obj.email == document.getElementById("user_email").value),
            console.log(result)
        if (result) {

            document.getElementById("empty_error").innerText = "User already exist";
            

        }
        else {
            console.log("Sign Up form successfully submitted");
            window.location.href="videosPage.html"
            persons.push({
                email: document.getElementById("user_email").value,
                password: document.getElementById("user_pwd").value
                
            });
            
            
            console.log(persons);
            window.location.href="signup.html"
        }
    }
}

function signIn(){
    window.location.href="signup.html";
}



