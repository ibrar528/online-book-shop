// Sample Book Data
const books = [
    { name: "The Great Gatsby", category: "fiction", price: 10, img: "https://picsum.photos/200/250?1" },
    { name: "A Brief History of Time", category: "science", price: 15, img: "https://picsum.photos/200/250?2" },
    { name: "World History", category: "history", price: 12, img: "https://picsum.photos/200/250?3" },
    { name: "1984", category: "fiction", price: 8, img: "https://picsum.photos/200/250?4" },
    { name: "The Selfish Gene", category: "science", price: 20, img: "https://picsum.photos/200/250?5" },
];

// Function to display books
function displayBooks(bookArray) {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    bookArray.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `
            <img src="${book.img}" alt="${book.name}">
            <h3>${book.name}</h3>
            <p>Category: ${book.category}</p>
            <p>Price: $${book.price}</p>
        `;
        bookList.appendChild(bookDiv);
    });
}

// Function to filter books
function filterBooks() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const categorySelect = document.getElementById('categorySelect').value;
    const maxPrice = parseFloat(document.getElementById('maxPrice').value);

    const filtered = books.filter(book => {
        const matchesName = book.name.toLowerCase().includes(searchInput);
        const matchesCategory = categorySelect === 'all' || book.category === categorySelect;
        const matchesPrice = isNaN(maxPrice) || book.price <= maxPrice;
        return matchesName && matchesCategory && matchesPrice;
    });

    displayBooks(filtered);
}

// Display all books initially
displayBooks(books);
