 Personal Library Dashboard

A lightweight, interactive web application designed to help users track, organize, and manage their personal reading collection. Built with vanilla JavaScript, HTML5, and CSS3.

 Features

Dynamic Book Management: Add, view, and remove books from your custom library grid.

Read Status Toggle: Instantly toggle reading status (READ vs UNREAD) on individual book cards.

Duplicate Prevention: Automatic title check to prevent adding the same book twice.

Conditional UI Rendering: Optional reader notes/comments display only when populated.

Stable Entity Tracking: Utilizes crypto.randomUUID() to generate persistent unique identifiers for each book object, decoupling DOM operations from array indices.

Interactive Modal Window: User-friendly form overlay for adding new entries.

Tech Stack

HTML5: Semantic markup and structure.

CSS3: Custom responsive layout and card grid.

JavaScript (ES6+): Object-Oriented JavaScript (OOP), prototypes, DOM manipulation, and dynamic HTML template rendering.

 Project Structure

├── index.html       # HTML structure and modal overlays
├── styles.css       # Custom styling, CSS Grid/Flexbox, dynamic modal styling
└── script.js       # Core application logic, object constructors, and UI rendering


 Getting Started & Setup

Prerequisites

All you need is a modern web browser (Chrome, Firefox, Safari, Edge) that supports ES6 standards and the Web Crypto API (crypto.randomUUID()).

Installation

Clone the repository:

git clone https://github.com/your-username/library-app.git


Navigate into the directory:

cd library-app


Open the application:
Simply double-click index.html or open it with a local development server like Live Server in VS Code.

Usage Guide

Add a Book:

Click the "Add Book" card to open the modal overlay.

Fill out the required details (Title, Author, Pages).

Optionally check "Mark as read" or include custom notes.

Click "Add Book" to commit the book to your library grid.

Toggle Read Status:

Click the "Mark as Read" / "Mark as Unread" button on any card to dynamically flip its read state and badge theme.

Remove a Book:

Click the "Remove" button on any card to delete it permanently from your collection.

💡 Technical Highlights

Unique Identifiers with crypto.randomUUID()

Rather than relying on shifting array indices (myLibrary[index]), every Book instance automatically generates a unique RFC 4122 Version 4 UUID upon instantiation:

function Book(title, author, pages, read, notes) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.notes = notes;
}


This guarantees safe record deletions and array updates regardless of how books are ordered or manipulated.

License

Distributed under the MIT License. See LICENSE for more information.