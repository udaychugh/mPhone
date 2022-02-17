function preorder(){
    var username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    location.replace("preorder.html");
}


