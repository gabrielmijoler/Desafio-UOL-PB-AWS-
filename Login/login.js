

// const form = document.getElementById("form");
// const username = document.getElementById("name");
// const email = document.getElementById("email");
// const age = document.getElementById("age");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     checkInput();
// })

// function checkInput(){
//     const nameValue = username.value;
//     const emailValue = email.value;
//     const ageValue = age.value;

//     if(nameValue === ""){
//         setErrorFor(username, "O nome de usuário é obrigatorio")
//         console.log(setErrorFor)
//     }else {
//         setSuccessFor(username);
//     }

//     if (emailValue === "") {
//         setErrorFor(email, "O email é obrigatório.");
//     } else {
//         setSuccessFor(email);
//     }

//     if (ageValue === "") {
//         setErrorFor(age, "A idade é obrigatorio.");
//     } else if(typeof ageValue === 'number'){
//         setErrorFor(age, "A idade não é numero.");
//     }else {
//         setSuccessFor(age);
//     }

//     const formControls = form.querySelectorAll(".form-control");

//     const formIsValid = [...formControls].every((formControl) => {
//     return formControl.className === "form-control success";
//     });

//     if (formIsValid) {
//     console.log("O formulário está 100% válido!");
//     }
// }




// function setErrorFor(input, message) {
//     const formControl = input.parentElement;
//     const small = formControl.querySelector("small");
  
//     // Adiciona a mensagem de erro
//     small.innerText = message;
  
//     // Adiciona a classe de erro
//     formControl.className = "form-control error";
//   }
  
//   function setSuccessFor(input) {
//     const formControl = input.parentElement;
  
//     // Adicionar a classe de sucesso
//     formControl.className = "form-control success";
//   }
  