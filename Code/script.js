import $ from 'jquery';

function buttonPressed(button) {
    // Disable the clicked button
    button.disabled = true;
    
    // Find the paragraph and change its content
    let messageParagraph = document.getElementById('message');
    messageParagraph.textContent = 'Button has been pressed, please wait!';
    console.log("button has been pressed");
}

$('#buttons-entry').on('click', 'button', function(event) {
    // Pass the clicked button to the buttonPressed function
    buttonPressed(event.currentTarget);
});