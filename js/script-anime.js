// Target the text element
const text = document.getElementById('text');

// Split the text content into an array of lines
const textContent = text.textContent.trim(); // Trim whitespace
const lines = textContent.split('\n'); // Split into lines if already wrapped

// Clear the original text content
text.textContent = '';

// Iterate through each line
lines.forEach((line, lineIndex) => {
    // Create a div for each line
    const lineElement = document.createElement('div');
    lineElement.classList.add('line'); // Add line class for styling
    if (lineIndex > 0) {
        lineElement.style.marginTop = '10px'; // Space between lines
    }
    text.appendChild(lineElement);

    // Split line content into words
    const words = line.split(' ');
    words.forEach((word, wordIndex) => {
        // Create a span for each word
        const wordElement = document.createElement('span');
        if (wordIndex > 0) {
            wordElement.style.marginLeft = '0.2em'; // Space between words
        }
        lineElement.appendChild(wordElement);

        // Split word into characters
        const characters = word.split('');
        characters.forEach((char) => {
            if (char !== ' ') { // Skip white spaces
                const charElement = document.createElement('span');
                charElement.textContent = char;
                charElement.classList.add('letter');
                wordElement.appendChild(charElement);
            } else {
                const spaceElement = document.createElement('span');
                spaceElement.innerHTML = '&nbsp;'; // Preserve space with &nbsp;
                wordElement.appendChild(spaceElement);
            }
        });
    });
});

// Define the animation
anime.timeline({ loop: false })
    .add({
        targets: '.letter',
        opacity: [0, 1],
        translateY: [100, 0],
        easing: 'easeOutExpo',
        duration: 2000,
        delay: (el, i) => 70 * i
    });