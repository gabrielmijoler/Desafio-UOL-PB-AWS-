var coments = document.getElementById("comments");
console.log(coments)

function textArea(){
    const textareas = coments.value;
    
    console.log(coments)

    if(coments.innerHTML != ""){ 
        location.href='/Login/index.html'
    } else { 
        return console.error("Escolher uma opção");
    }
    console.log(textareas)
    
}