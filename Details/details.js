
myTextArea = document.querySelector('textarea');


function textArea(){
    if (document.getElementById("comments").value == ""){
    alert("Preencher o campo");
    document.getElementById("comments").focus();
    }
    else {
        location.href='/Login/index.html'
    }
}
