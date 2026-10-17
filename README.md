#  Personal Library Dashboard

A lightweight, interactive web application for organizing and managing a personal book collection. Built with **HTML5, CSS3, and vanilla JavaScript**, this project allows users to add books, track their reading progress, and manage their library through a clean, responsive interface.

##  Features

- **Dynamic Book Management:** Add, display, and remove books from your personal library.
- **Reading Status Toggle:** Switch between `READ` and `UNREAD` directly from individual book cards.
- **Duplicate Prevention:** Prevents duplicate book entries by checking existing book titles.
- **Optional Reader Notes:** Displays notes or comments only when provided.
- **Unique Book Identification:** Uses `crypto.randomUUID()` to assign each book a unique identifier, ensuring reliable record management independent of array indices.
- **Interactive Modal:** Opens a modal form for entering new books without navigating away from the page.
- **Responsive Layout:** Uses CSS Grid and Flexbox to organize book cards and maintain a consistent layout across screen sizes.

##  Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic page structure and form elements |
| CSS3 | Styling, responsive layouts, CSS Grid, and Flexbox |
| JavaScript (ES6+) | Application logic, object constructors, DOM manipulation, and dynamic rendering |
| Web Crypto API | Generates unique identifiers for book records |

##  Project Structure

```text
library-app/
├── index.html    # Page structure and modal form
├── styles.css    # Styling, layout, and responsive design
└── script.js     # Book management and application logic
```

##  Getting Started

### Prerequisites

You need a modern web browser that supports JavaScript ES6+ and the Web Crypto API, including `crypto.randomUUID()`.

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/your-username/library-app.git
```

**2. Navigate to the project directory**

```bash
cd library-app
```

**3. Launch the application**

Open `index.html` directly in your browser, or use the Live Server extension in Visual Studio Code for local development.

> Replace `your-username/library-app.git` with your actual GitHub repository URL.

##  Usage Guide

### Adding a Book
1. Click the **Add Book** card to open the modal form.
2. Enter the book's title, author, and number of pages.
3. Optionally, mark the book as read and add personal notes.
4. Submit the form to add the book to your library.

### Updating Reading Status
Click the **Mark as Read** or **Mark as Unread** button on a book card to update its reading status and corresponding visual indicator.

### Removing a Book
Click the **Remove** button on a book card to delete that book from your collection.

##  Technical Highlights

### Object Constructors

Each book is represented by a `Book` constructor, which stores its properties and generates a unique identifier.

```javascript
function Book(title, author, pages, read, notes) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.notes = notes;
}
```

### Reliable Record Management

Using unique IDs instead of array indices makes it easier to identify individual books when removing entries or updating their reading status. Since array indices can change when items are removed, unique identifiers provide a more reliable way to target specific records.

### Dynamic DOM Manipulation

JavaScript updates the library interface in response to user interactions, allowing book cards and reading-status indicators to reflect changes without reloading the page.

### Duplicate Prevention

The application checks existing book titles before adding a new entry, helping keep the collection organized and reducing accidental duplicates.

##  Learning Objectives

This project provides practical experience with:

- JavaScript object constructors and prototypes.
- Arrays and object-based data management.
- DOM manipulation and event handling.
- Dynamic HTML rendering.
- Modal dialogs and form handling.
- Unique identifiers using the Web Crypto API.
- Responsive web design with CSS Grid and Flexbox.
- Organizing application logic across HTML, CSS, and JavaScript files.

##  License

This project is distributed under the MIT License. See the `LICENSE` file for details, if included in the repository.
