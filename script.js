const encriptador = document.querySelector('.encriptador');
const imagen = document.querySelector('.imagen');
const texto1 = document.querySelector('.imagen-text1');
const texto2 = document.querySelector('.imagen-text2');

let textEncriptado ;
function copiar(){
    const text =  document.querySelector('.text-int');
    const copiar = document.querySelector(".int-button");
    const copiado = text.textContent;

  navigator.clipboard.writeText(copiado).then(() => {
    copiar.textContent = "Copiado ✅";
    copiar.classList.add("btn-copiado");

    window.setTimeout(() => {
      copiar.textContent = "Copiar";
      copiar.classList.remove("btn-copiado");
    }, 1000);
  });
    
}


function encriptar(){
    let input =  document.querySelector('.input-text').value;
    if(input.length <= 5)return;
    let text =  document.querySelector('.text-int');
   
    if(!text){
        encriptador?.removeChild(imagen);
        encriptador?.removeChild(texto1);
        encriptador?.removeChild(texto2);
        text = document.createElement('p');
        text.setAttribute('class','text-int')
        const button  = document.createElement('button');
        button.setAttribute("class","int-button");
        button.setAttribute('onclick',"copiar()")
        button.textContent = "Copiar";
    
        encriptador?.appendChild(text);
        encriptador?.appendChild(button);
    }
    
    
    
    const validacion = /([A-ZáéíóúÁÉÍÓÚñ\d$@$!%*?&])/gm.test(input);
    if (!validacion && input.length > 0) {
    const mapObj = {
      e: "enter",
      i: "imes",
      a: "ai",
      o: "ober",
      u: "ufat",
    };
    input = input.replace(/e|i|a|o|u/gm, (matched) => {
      return mapObj[matched];
    });
    }
    
    text.textContent = input;

    document.querySelector('.first-button')?.setAttribute('disabled','')
   
}


const desencriptar = () =>{
   
    let input = document.querySelector(".input-text").value;
    if (!input)return;
  const validacion = /([A-ZáéíóúÁÉÍÓÚñ\d$@$!%*?&])/gm.test(input);
  if (!validacion && input.length > 0) {
    const mapObj = {
      enter: "e",
      imes: "i",
      ai: "a",
      ober: "o",
      ufat: "u",
    };
    input = input.replace(/enter|imes|ai|ober|ufat/gm, (matched) => {
      return mapObj[matched];
    });

    let text =  document.querySelector('.text-int');

    text.textContent = input;
  }
}

const habilitar = () =>{
    document.querySelector('.first-button')?.removeAttribute('disabled');
    const text =  document.querySelector('.text-int');
    if(text) text.textContent = '';
}   