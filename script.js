//Data Structures

class Library {
  constructor() {
    this.books = [];
  }

  addBook(newBook) {
    if (!this.isInLibrary(newBook)) {
      this.books.push(newBook);
    }
  }

  removeBook(title) {
    this.books.filter((book) => book.title != title);
  }

  isInLibrary(newBook) {
    return this.books.some((book) => book.title == newBook.title);
  }
}
class Book {
  constructor(
    title = "Unknown",
    author = "Unknown",
    pages = "0",
    read = false
  ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

const myLibrary = new Library();

//UI

const booksGrid = document.querySelector(".books-grid");
const addBookBtn = document.querySelector(".addBook-btn");
const modalBg = document.querySelector(".modal-bg");
const modalBtn = document.querySelector(".modal-btn");
const exitBtn = document.querySelector(".exit-btn");

const createNewBook = () => {
  const newBook = new Book(
    document.getElementById("titleInput").value,
    document.getElementById("authorInput").value,
    document.getElementById("pagesInput").value,
    document.querySelector('input[name="read"]:checked').value == "Yes"
      ? "Read"
      : "Not read"
  );
  return newBook;
};

const addBookToLibrary = () => {
  // do stuff here
  // taking the user input and storing it
  const newBook = createNewBook();
  document.getElementById("titleInput").value = "";
  document.getElementById("authorInput").value = "";
  document.getElementById("pagesInput").value = "";
  myLibrary.addBook(newBook);
  closeModal();
  displayBooks(newBook);
};

const removeBookFromLibrary = (e) => {
  if (e.target.classList.contains("removebook-btn")) {
    let bookTitle = e.target.parentNode.firstChild.textContent;
    console.log(e.target.parentNode);
    for (var i = 0; i < myLibrary.books.length; i++) {
      if (myLibrary.books[i].title === bookTitle) {
        myLibrary.books.splice(i, 1);
        e.target.parentNode.remove();
      }
    }
  }
};

const displayBooks = (book) => {
  const bookCard = document.createElement("div");

  const title = document.createElement("h3");
  const author = document.createElement("h3");
  const pages = document.createElement("h3");
  const readBtn = document.createElement("button");
  const removeBtn = document.createElement("button");

  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(readBtn);
  bookCard.appendChild(removeBtn);
  booksGrid.appendChild(bookCard);

  bookCard.classList.add("book-card");
  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = book.pages;
  readBtn.textContent = book.read;

  readBtn.textContent == "Read"
    ? readBtn.classList.add("did-readbook")
    : readBtn.classList.add("didnot-readbook");

  readBtn.classList.add("readbook-btn");
  readBtn.onclick = function () {
    if (readBtn.textContent == "Read") {
      readBtn.textContent = "Not read";
      readBtn.classList.add("didnot-readbook");
      readBtn.classList.remove("did-readbook");
    } else {
      readBtn.textContent = "Read";
      readBtn.classList.add("did-readbook");
      readBtn.classList.remove("didnot-readbook");
    }
  };

  removeBtn.classList.add("removebook-btn");
  removeBtn.textContent = "Remove";
  removeBtn.onclick = removeBookFromLibrary;
};

openModal = () => {
  modalBg.style.visibility = "visible";
  modalBg.style.opacity = 1;
};

closeModal = () => {
  modalBg.style.visibility = "hidden";
  modalBg.style.opacity = 0;
};

myLibrary.books.map(displayBooks);

//the modal part
addBookBtn.addEventListener("click", openModal);

exitBtn.addEventListener("click", closeModal);

modalBtn.addEventListener("click", addBookToLibrary);
