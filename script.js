// script.js

// Saving wisdom into the universe's memory, much like storing energy into crystals.
function saveToLocalStorage() {
    const key = document.getElementById('keyInput').value;
    const value = document.getElementById('valueInput').value;
    if (key && value) {
        localStorage.setItem(key, value); // Infusing energy into our digital space
        displayLocalStorage(); // Reflecting on the stored wisdom
        document.getElementById('keyInput').value = ''; // Clearing the mind (input field)
        document.getElementById('valueInput').value = '';
        showMessage('Energy infused successfully.', true);
    } else {
        showMessage('Please enter both a key and value.', false);
    }
}

// Clearing the mind is like clearing space for new energy to flow.
function clearLocalStorage() {
    localStorage.clear();
    displayLocalStorage();
    showMessage('Space purified. Ready for new energy.', true);
}

// Displaying the stored wisdom in our sacred digital temple.
function displayLocalStorage() {
    const storedDataArea = document.getElementById('storedData');
    storedDataArea.innerHTML = ''; // Clearing previous views
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        storedDataArea.innerHTML += `<div class="stored-item">${key}: ${value}</div>`;
    }
}

// Searching through the ancient scrolls to reveal needed wisdom.
function searchLocalStorage() {
    const searchKey = document.getElementById('searchInput').value;
    const value = localStorage.getItem(searchKey);
    const resultArea = document.getElementById('searchResult');
    if (value) {
        resultArea.innerHTML = `<div class="search-found">${searchKey}: ${value}</div>`;
    } else {
        resultArea.innerHTML = `<div class="search-not-found">Scroll not found in the archives.</div>`;
    }
}

// The universe speaks back to us, providing messages of success or guidance.
function showMessage(message, isSuccess) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.className = isSuccess ? 'success-message' : 'error-message';
    document.body.appendChild(messageElement);
    setTimeout(() => {
        messageElement.style.opacity = '0';
        setTimeout(() => messageElement.remove(), 500);
    }, 3000);
}

// Initially, we reflect on the wisdom already stored in our space.
displayLocalStorage();
// script.js

// Toggle dark mode
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Rest of your JavaScript code (saveToLocalStorage, clearLocalStorage, searchLocalStorage, showMessage, displayLocalStorage) goes here.
// Ensure that you integrate this JavaScript with your HTML.
