document.addEventListener("DOMContentLoaded", function() {
  // cera un nuevo parrafo y lo añade al final del body  
  function createParagraph() {
      let para = document.createElement('p');
      para.textContent = 'You clicked the button!';
      document.body.appendChild(para);
      console.log(buttons.length);
    } 
/*
  1. Obtiene referencias de todos los botones de la página en un formato de arreglo.
  2. Recorre todos los botones y agrega un detector de eventos 'click' a cada uno.

  Cuando se presione cualquier botón, se ejecutará la función createParagraph().
*/
    const buttons = document.querySelectorAll('button');

    for(let i=0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', createParagraph);
    }
  });

  // soy un comentario
  /* nosotros
  tambien
  somos
  un
  comentario */