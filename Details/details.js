// myTextArea = document.querySelector('textarea');


// myTextArea.addEventListener('input', function textArea(){
//         let digitando = myTextArea.value.lenght;

//         if(digitando > 1){
//             console.error("erro")
//         } else{
//             location.href='/Login/index.html'
//         }
//     }
// )
function validate(){
        if (document.getElementById("comments").value == ""){
        alert("Preencher o campo");
        document.getElementById("comments").focus();
        }
        else {
        // alert(document.getElementById("comments").value);
        location.href='/Login/index.html'
        }
}