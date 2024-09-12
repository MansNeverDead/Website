function buttonHasBeenPressed(buttonId, paragraphId, word) {
    const message = document.getElementById(paragraphId)
    document.getElementById(buttonId).addEventListener("click", function(){
         message.textContent = word; });
};

buttonHasBeenPressed('button', 'message', "Vous avez appuyez sur le bouton, veillez patienter s'il vous plaît")