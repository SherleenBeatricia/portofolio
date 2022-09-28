let validate=()=>{
    let email=document.getElementById("email")
    let username=document.getElementById("username")
    let password=document.getElementById("password")
    let dob=document.getElementById("dob")
    let agreement=document.getElementById("agreement")
    let errorMsg=[]

    vEmail(email,errorMsg)
    vUsername(username,errorMsg)
    vPassword(password,errorMsg)
    vDob(dob,errorMsg)
    vAgreement(agreement,errorMsg)

    if(errorMsg.length===0){
        alert("Registation Success!")
    }
    else{
        alert(errorMsg.join("\n"))
    }
}

let vEmail=(email,errorMsg)=>{
    if(email.value===""){
        errorMsg.push("Email Required!")
    }
    else if(email.value.startsWith(".")||email.value.startsWith("@")){
        errorMsg.push("Email cannot starts with . or @")
    }
    else if(email.value.indexOf(".")===(email.value.indexOf("@")+1)){
        errorMsg.push("Email cannot contaion . after @")      
    }
}

let vUsername=(username,errorMsg)=>{
    if(username.value===""){
        errorMsg.push("Username Required!")
    }
    else if(username.value.length<5){
        errorMsg.push("Username need to be more than 5 characters!")
    }
}

let vPassword=(password,errorMsg)=>{
    if(password.value===""){
        errorMsg.push("Password Required!")
    }
    else if(password.value.length<8){
        errorMsg.push("Password need to be more than 8 characters!")
    }
}

let vDob=(_dob,errorMsg)=>{
    if(dob.value===""){
        errorMsg.push("DOB Required!")
    }
}

let vAgreement=(agreement,errorMsg)=>{
    if(agreement.checked==false){
        errorMsg.push("You need to check the user terms agreement!")
    }
}
