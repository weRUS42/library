let books = document.getElementById("books");
let nme = document.getElementById("book-name");
let author = document.getElementById("book-author");
let pages = document.getElementById("book-pages");
let submit = document.getElementById("submit");
let form = document.getElementById("form");
let inputs = document.querySelectorAll(".modal-input");


document.addEventListener("click",closeModalWindow);
document.addEventListener("click",closeBook);

function closeModalWindow(e) {
    if((e.target.type == "button" || e.target.type == "submit") && (e.target.value != "delete")) document.body.querySelector(".modal").classList.toggle("modal--active");
}

function closeBook(e) {
    if(e.target.value == "delete") {
        e.target.closest(".book").remove();
    }
}

// let obj = {
//     name: "name",
//     qwe: "nfasd",
//     pages: "123",
// }

// function addBook() {
//     books.innerHTML += `<div class="book"></div>`;
//     for (let item in obj) {
//         books.lastElementChild.innerHTML += `<p class="description">${item} Name: <span>${obj[item]}</span></p>`;
//     }
// }

// function createBook() {

// }

// submit.addEventListener("click", (e) => {
//     if(e.target.value) return console.log(e.target.value);
// })

// addBook();

function Book(name,author,pages) {
    this.name = name,
    this.author = author,
    this.pages = pages;
}


// addBook(new Book("123","123","123"))

form.addEventListener('submit', function(e) {
    // что бы не отправилась форма. 
    e.preventDefault();
    let book = new Book(nme.value,author.value,pages.value);
    books.innerHTML += (`<div class="book"></div>`);
    books.lastElementChild.innerHTML =  
        `<p class="description">Book Name: <span>${book.name}</span></p>
        <p class="description">Book Author: <span>${book.author}</span></p>
        <p class="description">Book pages: <span>${book.pages}</span></p>
        <button type="button" value="delete">Delete</button>`;

    nme.value = "";
    author.value = "";
    pages.value = "";
});


