"use strict";

class Book {
  constructor(title, author, yearOfPublication, price) {
    this.title = title;
    this.author = author;
    this.yearOfPublication = yearOfPublication;
    this.price = price;
  }
}

class Library {
  constructor() {
    this.books = [];
  }
  fromBookList(bookList) {
    bookList.map((book) => {
      this.books.push(new Book(book.title, book.author, book.yearOfPublication, book.price))
    });
  }

  addBook(book) {
    this.books.push(book);
  }
}

module.exports = { Book, Library }
