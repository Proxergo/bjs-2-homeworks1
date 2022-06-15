// Задача 1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    };

    fix() {
        this.state *= 1.5;
    };

    set state(stateValue) {
        if (stateValue < 0) {
            this._state = 0;
        } else if (stateValue > 100) {
            this._state = 100;
        } else {
            this._state = stateValue;
        }
    };

    get state() {
        return this._state;
    };
};

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.type = 'magazine';
    }
};

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = 'book';
        this.author = author;
    }
};

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = 'novel';
    }
};

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = 'fantastic';
    }
};

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = 'detective';
    }
};

//Задача 2

class Library {
    constructor(name, books = []) {
        this.name = name;
        this.books = books;
    };
    
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    };

    findBookBy(type, value) {
       for (let book of this.books) {
            if (book[type] === value) {
                return book;
            }
        }

        return null;
    }

    giveBookByName(bookName) {
        for (let index in this.books) {
            if (this.books[index].name === bookName) {
                return this.books.splice(index, 1)[0];
            }
        }
        return null;
    }
}

// задание 3
