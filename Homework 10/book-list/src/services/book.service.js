import { collection, addDoc, doc, deleteDoc, query, getDocs } from "firebase/firestore";

import { firestore } from "../firebase/firebase";
import Book from "../models/Book";

class BookService {
    constructor() {
        this.collection = 'books'
    }

    async createBook(book) {
        const docRef = await addDoc(collection(firestore, this.collection), {
            title: book.title,
            author: book.author,
            isbn: book.isbn
        });

        book.id = docRef.id;

        return book;
    }

    async readBooks() {
        const q = query(collection(firestore, this.collection));
        const querySnapshot = await getDocs(q);

        const books = [];

        querySnapshot.forEach((doc) => {
            const data = doc.data()

            let newBook = new Book(
                doc.id,
                data.title,
                data.author,
                data.isbn
            );

            books.push(newBook);
        });

        return books;
    }

    async deleteBook(book) {
        await deleteDoc(doc(firestore, this.collection, book.id));
    }

}

const service = new BookService();

export default service;