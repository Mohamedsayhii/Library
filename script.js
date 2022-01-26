const booksGrid = document.querySelector(".books-grid");
const books = booksGrid.childNodes;
const modalBg = document.querySelector(".modal-bg");
const addBookBtn = document.querySelector(".addBook-btn");
const exitBtn = document.querySelector(".exit-btn");
const modalBtn = document.querySelector(".modal-btn");

let myLibrary = [];

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
    document.getElementById("titleInput").value,
    document.getElementById("authorInput").value,
    document.getElementById("pagesInput").value,
    "Read"
  );

  document.getElementById("titleInput").value = "";
  document.getElementById("authorInput").value = "";
  document.getElementById("pagesInput").value = "";
  myLibrary.push(newBook);
  closeModal();
  displayBooks(newBook);
}

function displayBooks(book) {
  const bookCard = document.createElement("div");

  const title = document.createElement("h3");
  const author = document.createElement("h3");
  const pages = document.createElement("h3");
  const read = document.createElement("h3");
  const removeBtn = document.createElement("button");

  bookCard.classList.add("book-card");
  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = book.pages;
  read.textContent = book.read;

  removeBtn.classList.add("removebook-btn");
  removeBtn.textContent = "Remove";

  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(read);
  bookCard.appendChild(removeBtn);

  booksGrid.appendChild(bookCard);
}

myLibrary.map(displayBooks);

//the modal part
addBookBtn.addEventListener("click", function () {
  modalBg.style.visibility = "visible";
  modalBg.style.opacity = 1;
});

closeModal = function () {
  modalBg.style.visibility = "hidden";
  modalBg.style.opacity = 0;
};

const removeBook = (e) => {
  for (let i = 0; i < myLibrary.length; i++) {
    myLibrary.splice(i, e);
  }
  displayBooks();
};
exitBtn.addEventListener("click", closeModal);

modalBtn.addEventListener("click", addBookToLibrary);

window.addEventListener("click", removeBookFromLibrary);

function removeBookFromLibrary(e) {
  if (e.target.classList.contains("removebook-btn")) {
    let bookTitle = e.target.parentNode.firstChild.textContent;
    console.log(e.target.parentNode);
    for (var i = 0; i < myLibrary.length; i++) {
      if (myLibrary[i].title === bookTitle) {
        myLibrary.splice(i, 1);
        e.target.parentNode.remove();
      }
    }
  }
}
