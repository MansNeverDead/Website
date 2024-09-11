function buttonPressed(button) {
    // Disable the clicked button
    button.disabled = true;
    
    // Find the paragraph and change its content
    const messageParagraph = document.getElementById('message');
    messageParagraph.textContent = 'Button has been pressed, please wait!';
}