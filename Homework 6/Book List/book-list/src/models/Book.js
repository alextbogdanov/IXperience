export default class Book {
    static id = 0;

    constructor(title, author, isbn) {
        this.id = Book.id;
        this.title = title;
        this.author = author;
        this.isbn = isbn;

        Book.id++;
    }
}