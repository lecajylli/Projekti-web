function login(){
    var emaili=document.getElementById("emaili").value;
    var passi=document.getElementById("passi").value;

    if(emaili=="" && passi==""){
        alert("No email or password")
    }
    else if(emaili==""){
        alert("Please enter a valid email address")
    }
    else if(passi==""){
        alert("Please enter a valid password")
    }
    else{
        confirm("Logged in succesfully")
    }

  }
  