// Toggle dark mode
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    toggleButtonColor();
});

// Toggle button color between red and yellow
function toggleButtonColor() {
    const button = document.getElementById('theme-toggle');
    button.style.backgroundColor = button.style.backgroundColor === 'red' ? 'yellow' : 'red';
}

// Save to local storage
document.getElementById('saveButton').addEventListener('click', saveToLocalStorage);

// Clear local storage
document.getElementById('clearButton').addEventListener('click', clearLocalStorage);

// Search local storage
document.getElementById('searchButton').addEventListener('click', searchLocalStorage);

// Display stored wisdom on page load
document.addEventListener('DOMContentLoaded', displayLocalStorage);

function saveToLocalStorage() {
    const key = document.getElementById('keyInput').value;
    const value = document.getElementById('valueInput').value;
    if (key && value) {
        localStorage.setItem(key, value);
        displayLocalStorage();
        showMessage('Energy infused successfully.', true);
    } else {
        showMessage('Please enter both a key and value.', false);
    }
}

function clearLocalStorage() {
    localStorage.clear();
    displayLocalStorage();
    showMessage('Space purified. Ready for new energy.', true);
}

function displayLocalStorage() {
    const storedDataArea = document.getElementById('storedData');
    storedDataArea.innerHTML = '';
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        storedDataArea.innerHTML += `<div class="stored-item">${key}: ${value}</div>`;
    }
}

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
