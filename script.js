document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('corkboard-container');

    fetch('content.txt')
        .then(response => response.text())
        .then(data => {
            const notes = data.split(',');

            notes.forEach(note => {
                const noteElement = document.createElement('div');
                noteElement.className = 'note';
                noteElement.textContent = note.trim();
                container.appendChild(noteElement);
            });
        })
        .catch(error => console.error('Error fetching the content:', error));
});
