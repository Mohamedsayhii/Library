const booksGrid = document.querySelector(".books-grid");
const modalBg = document.querySelector(".modal-bg");
const addBookBtn = document.querySelector(".addBook-btn");
const exitBtn = document.querySelector(".exit-btn");

let myLibrary = [
  {
    title: "Rework",
    author: "Fuck this",
    pages: "200",
    read: "Yes",
  },
  {
    title: "Aaed ila Haifa",
    author: "Ghassan Kanafani",
    pages: "200",
    read: "Yes",
  },
];

function Book(title, author, pages, read) {
  // the constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
  // taking the user input and storing it
  const newBook = new Book(
    prompt("Title"),
    prompt("Author"),
    prompt("Pages"),
    prompt("Read")
  );
  myLibrary.push(newBook);
  displayBooks(newBook);
}

myLibrary.map(displayBooks);

function displayBooks(book) {
  const bookCard = document.createElement("div");

  const title = document.createElement("h3");
  const author = document.createElement("h3");
  const pages = document.createElement("h3");
  const read = document.createElement("h3");

  bookCard.classList.add("book-card");
  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = book.pages;
  read.textContent = book.read;

  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(read);

  booksGrid.appendChild(bookCard);
}

//the modal part
addBookBtn.addEventListener("click", function () {
  modalBg.style.visibility = "visible";
  modalBg.style.opacity = 1;
});

exitBtn.addEventListener("click", function () {
  modalBg.style.visibility = "hidden";
  modalBg.style.opacity = 0;
});
