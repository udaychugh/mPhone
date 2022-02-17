
var user = localStorage.getItem("username");
document.getElementById("username").innerHTML = user;

document.getElementById("pro").addEventListener("click", function(){
    document.getElementById("pro").style.borderColor = "black";
    document.getElementById("pro").style.backgroundColor = "white";
    document.getElementById("pro").style.color = "black";
    document.getElementById("promax").style.borderColor = "white";
    document.getElementById("promax").style.backgroundColor = "transparent";
    document.getElementById("promax").style.color = "white";
    
    checkPrice(99999, 0);
});

document.getElementById("promax").addEventListener("click", function(){
    document.getElementById("promax").style.borderColor = "black";
    document.getElementById("promax").style.backgroundColor = "white";
    document.getElementById("promax").style.color = "black";
    document.getElementById("pro").style.borderColor = "white";
    document.getElementById("pro").style.backgroundColor = "transparent";
    document.getElementById("pro").style.color = "white";
    checkPrice(111999, 0);
});

document.getElementById("bluefinish").addEventListener("click", function(){
    document.getElementById("bluefinish").style.borderColor = "#69abce";
    document.getElementById("bluefinish").style.backgroundColor = "white";
    document.getElementById("bluefinish").style.color = "black";
    
    document.getElementById("silverfinish").style.borderColor = "white";
    document.getElementById("silverfinish").style.backgroundColor = "transparent";
    document.getElementById("silverfinish").style.color = "white";
    
    document.getElementById("goldfinish").style.borderColor = "white";
    document.getElementById("goldfinish").style.backgroundColor = "transparent";
    document.getElementById("goldfinish").style.color = "white";
    
    document.getElementById("graphitefinish").style.borderColor = "white";
    document.getElementById("graphitefinish").style.backgroundColor = "transparent";
    document.getElementById("graphitefinish").style.color = "white";
    
    
});

document.getElementById("silverfinish").addEventListener("click", function(){
    document.getElementById("silverfinish").style.borderColor = "#aaa9ad";
    document.getElementById("silverfinish").style.backgroundColor = "white";
    document.getElementById("silverfinish").style.color = "black";
    
    document.getElementById("bluefinish").style.borderColor = "white";
    document.getElementById("bluefinish").style.backgroundColor = "transparent";
    document.getElementById("bluefinish").style.color = "white";
    
    document.getElementById("goldfinish").style.borderColor = "white";
    document.getElementById("goldfinish").style.backgroundColor = "transparent";
    document.getElementById("goldfinish").style.color = "white";
    
    document.getElementById("graphitefinish").style.borderColor = "white";
    document.getElementById("graphitefinish").style.backgroundColor = "transparent";
    document.getElementById("graphitefinish").style.color = "white";
    
    
});

document.getElementById("goldfinish").addEventListener("click", function(){
    document.getElementById("goldfinish").style.borderColor = "#F6E0C9";
    document.getElementById("goldfinish").style.backgroundColor = "white";
    document.getElementById("goldfinish").style.color = "black";
    
    document.getElementById("silverfinish").style.borderColor = "white";
    document.getElementById("silverfinish").style.backgroundColor = "transparent";
    document.getElementById("silverfinish").style.color = "white";
    
    document.getElementById("bluefinish").style.borderColor = "white";
    document.getElementById("bluefinish").style.backgroundColor = "transparent";
    document.getElementById("bluefinish").style.color = "white";
    
    document.getElementById("graphitefinish").style.borderColor = "white";
    document.getElementById("graphitefinish").style.backgroundColor = "transparent";
    document.getElementById("graphitefinish").style.color = "white";
    
    
});

document.getElementById("graphitefinish").addEventListener("click", function(){
    document.getElementById("graphitefinish").style.borderColor = "#69abce";
    document.getElementById("graphitefinish").style.backgroundColor = "white";
    document.getElementById("graphitefinish").style.color = "black";
    
    document.getElementById("silverfinish").style.borderColor = "white";
    document.getElementById("silverfinish").style.backgroundColor = "transparent";
    document.getElementById("silverfinish").style.color = "white";
    
    document.getElementById("goldfinish").style.borderColor = "white";
    document.getElementById("goldfinish").style.backgroundColor = "transparent";
    document.getElementById("goldfinish").style.color = "white";
    
    document.getElementById("bluefinish").style.borderColor = "white";
    document.getElementById("bluefinish").style.backgroundColor = "transparent";
    document.getElementById("bluefinish").style.color = "white";
    
    
});


document.getElementById("base").addEventListener("click", function(){
    document.getElementById("base").style.borderColor = "black";
    document.getElementById("base").style.backgroundColor = "white";
    document.getElementById("base").style.color = "black";
    
    document.getElementById("inter").style.borderColor = "white";
    document.getElementById("inter").style.backgroundColor = "transparent";
    document.getElementById("inter").style.color = "white";
    
    document.getElementById("high").style.borderColor = "white";
    document.getElementById("high").style.backgroundColor = "transparent";
    document.getElementById("high").style.color = "white";
    
    document.getElementById("advance").style.borderColor = "white";
    document.getElementById("advance").style.backgroundColor = "transparent";
    document.getElementById("advance").style.color = "white";
    
    if(document.getElementById("pro").style.backgroundColor === "white")
        {
            checkPrice(99999, 999);
        }
    else if(document.getElementById("promax").style.backgroundColor === "white")
        {
            checkPrice(111999, 999);
        }
    else{
        checkPrice(0, 999);
    }
    
});

document.getElementById("inter").addEventListener("click", function(){
    document.getElementById("inter").style.borderColor = "black";
    document.getElementById("inter").style.backgroundColor = "white";
    document.getElementById("inter").style.color = "black";
    
    document.getElementById("base").style.borderColor = "white";
    document.getElementById("base").style.backgroundColor = "transparent";
    document.getElementById("base").style.color = "white";
    
    document.getElementById("high").style.borderColor = "white";
    document.getElementById("high").style.backgroundColor = "transparent";
    document.getElementById("high").style.color = "white";
    
    document.getElementById("advance").style.borderColor = "white";
    document.getElementById("advance").style.backgroundColor = "transparent";
    document.getElementById("advance").style.color = "white";
    
    if(document.getElementById("pro").style.backgroundColor === "white")
        {
            checkPrice(99999, 1999);
        }
    else if(document.getElementById("promax").style.backgroundColor === "white")
        {
            checkPrice(111999, 1999);
        }
    else{
        checkPrice(0, 1999);
    }
    
});

document.getElementById("high").addEventListener("click", function(){
    document.getElementById("high").style.borderColor = "black";
    document.getElementById("high").style.backgroundColor = "white";
    document.getElementById("high").style.color = "black";
    
    document.getElementById("inter").style.borderColor = "white";
    document.getElementById("inter").style.backgroundColor = "transparent";
    document.getElementById("inter").style.color = "white";
    
    document.getElementById("base").style.borderColor = "white";
    document.getElementById("base").style.backgroundColor = "transparent";
    document.getElementById("base").style.color = "white";
    
    document.getElementById("advance").style.borderColor = "white";
    document.getElementById("advance").style.backgroundColor = "transparent";
    document.getElementById("advance").style.color = "white";
    
    if(document.getElementById("pro").style.backgroundColor === "white")
        {
            checkPrice(99999, 2999);
        }
    else if(document.getElementById("promax").style.backgroundColor === "white")
        {
            checkPrice(111999, 2999);
        }
    else{
        checkPrice(0, 2999);
    }
    
});

document.getElementById("advance").addEventListener("click", function(){
    document.getElementById("advance").style.borderColor = "black";
    document.getElementById("advance").style.backgroundColor = "white";
    document.getElementById("advance").style.color = "black";
    
    document.getElementById("inter").style.borderColor = "white";
    document.getElementById("inter").style.backgroundColor = "transparent";
    document.getElementById("inter").style.color = "white";
    
    document.getElementById("high").style.borderColor = "white";
    document.getElementById("high").style.backgroundColor = "transparent";
    document.getElementById("high").style.color = "white";
    
    document.getElementById("base").style.borderColor = "white";
    document.getElementById("base").style.backgroundColor = "transparent";
    document.getElementById("base").style.color = "white";
    
    if(document.getElementById("pro").style.backgroundColor === "white")
        {
            checkPrice(99999, 3999);
        }
    else if(document.getElementById("promax").style.backgroundColor === "white")
        {
            checkPrice(111999, 3999);
        }
    else{
        checkPrice(0, 3999);
    }
    
});

function checkPrice(model, capacity){
    document.getElementById("price").innerHTML = model + capacity;
}

