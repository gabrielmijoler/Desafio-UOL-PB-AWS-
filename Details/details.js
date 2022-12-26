myTextArea = document.querySelector('textarea');


myTextArea.addEventListener('input', function textArea(){
    let digitando = myTextArea.value.lenght;

    if(digitando > 1){
        console.error("erro")
    } else{
        location.href='/Login/index.html'
    }
}
)