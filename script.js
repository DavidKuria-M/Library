let myLibrary = [];


function Book(title, author, pages, read, notes) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.notes = notes;
};

Book.prototype.toggleReadStatus = function () {
    this.read = !this.read;
};

const booksContainer = document.getElementById('books-container');
const libraryCount = document.getElementById('library-count');
const addBookCard = document.querySelector('.add-book');

function openBookModal() {
    if (document.querySelector('.modal-overlay')) return;

    const overlay = document.createElement('div');
    overlay.classList.add('modal-overlay');

    overlay.innerHTML = `
         <div class="modal">
            <div class="modal-header">
                <h3>Add a New Book</h3>
                <button id="close-modal-btn" class="close-btn">&times;</button>
            </div>

           <div class="modal-content">
                <form id="book-form">
                    <div class="form-group">
                        <label for="title">Title *</label>
                        <input type="text" id="title" placeholder="Enter book title" required>
                    </div>
                    <div class="form-group">
                        <label for="author">Author *</label>
                        <input type="text" id="author" placeholder="Enter author name" required>
                    </div>
                    <div class="form-group">
                        <label for="pages">Pages *</label>
                        <input type="number" id="pages" placeholder="Number of pages" required>
                    </div>
                    <div class="form-group checkbox-group">
                        <label>Have you read this book?</label>
                        <div class="checkbox-wrapper">
                            <input type="checkbox" id="read-status">
                            <label for="read-status">Mark as read</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="notes">Additional notes (optional)</label>
                        <textarea id="notes" placeholder="Any notes about this book..."></textarea>
                    </div>
                    <div class="modal-actions">
                        <button type="button" id="cancel-btn" class="btn-secondary">Cancel</button>
                        <button type="submit" class="btn-primary">Add Book</button>
                    </div>
                </form>
           </div>
        </div>

    `;

    document.body.appendChild(overlay);
    const closeModal = () => overlay.remove();
    
    const close_modal = document.getElementById('close-modal-btn');
    close_modal.addEventListener('click', closeModal);

    const cancel_btn = document.getElementById('cancel-btn');
    cancel_btn.addEventListener('click', closeModal);

    //testing other options

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeModal();
        }
    });

    const form = document.getElementById('book-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pages = document.getElementById('pages').value;
        const isRead = document.getElementById('read-status').checked;
        const notes = document.getElementById('notes').value;

        const bookExists = myLibrary.some(book => book.title.toLowerCase() === title.toLowerCase());

        if(bookExists){
            alert('${title} is already in your library');
            return;
        }
        //debugging purposes
        //console.table({ title, author, pages, isRead, notes });

        const newBook = new Book(title,author,pages,isRead,notes);
        myLibrary.push(newBook);
        displayBooks();
        closeModal();
    });
}

addBookCard.addEventListener('click', openBookModal);

function displayBooks(){
    const libraryContainer = document.querySelector('.book-grid');
    const addBookCard = document.querySelector('.add-book');

    const existingCards = libraryContainer.querySelectorAll('.book-card');
    existingCards.forEach(card => card.remove());


    myLibrary.forEach((book,index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        const readStatusText = book.read ? 'READ' : 'UNREAD';
        const badgeClass = book.read ? 'read' : 'unread';
        const toggleBtnText = book.read ? 'Mark as Unread' : 'Mark as Read';
        const readYesNo = book.read ? 'Yes' : 'No';

        const notesSection = book.notes ? `<p class="book-notes"><span>Notes: </span> ${book.notes}</p>`: '';
        bookCard.innerHTML = `
            <div>
                <div class="card-top">
                    <div>
                        <h3 class="book-title">${book.title}</h3>
                        <p class="book-author">${book.author}</p>
                    </div>
                    <span class="badge ${badgeClass}">${readStatusText}</span>
                </div>
                <div class="book-details">
                    <p><span>Pages:</span> ${book.pages} </p>
                    <p><span>Read:</span>${readYesNo}</p>
                    ${notesSection}
                </div>
            </div>
            <div class="card-actions">
                <button class="btn-read" onclick="toggleReadStatus('${book.id}')">${toggleBtnText}</button>
                <button class="btn-remove" onclick="removeBook('${book.id}')">Remove</button>
            </div>

        `;
        libraryContainer.insertBefore(bookCard,addBookCard);
    });

}

function removeBook(id){
    const index = myLibrary.findIndex(book => book.id === id);
    if(index !== -1){
        myLibrary.splice(index,1);
        displayBooks();
    }
}

function toggleReadStatus(id){
    const book = myLibrary.find(book => book.id === id);
    if(book){
        book.read = !book.read;
        displayBooks();
    }
}
