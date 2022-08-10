
function submitMessage(){
    let nameInput = document.forms["contactMe"]["name-input"].value;
    let messageInput = document.forms["contactMe"]["message-input"].value;

    if(nameInput != "" && messageInput != ""){
        alert("Message Submitted.")
        return true;
    }

    else{
        return false;
    }
}
