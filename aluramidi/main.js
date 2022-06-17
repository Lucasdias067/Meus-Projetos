const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom (idElementoAudio) {
   const document = document.querySelector(idElementoAudio);
   if (document != null && elemento.localname == 'audio') {
    document = document.play()
   }else {
       console.log('Elemento não encontrado')
   }
}


//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){
        if (evento.code === 'Space' || evento.code === 'Enter') { 
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}