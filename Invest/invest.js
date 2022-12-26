
function validarcheck(){
        var check = document.getElementsByName("investcoment"); 
    
        for (var i=0;i<check.length;i++){ 
            if (check[i].checked == true){ 
                location.href='/Details/index.html'
            }  else {
                return console.error("Escolher uma opção");
            }
        }
        console.log(check)
    }