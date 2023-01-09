import { books } from "./books.js";

function randomPage() {
  const keys = Object.keys(books);
  const randomBook = books[keys[(keys.length * Math.random()) << 0]];
  const img = document.querySelector(".libro");
  const title = document.querySelector(".booktitle");
  const genre = document.querySelector(".genre");
  const pages = document.querySelector(".pages");
  const details = document.querySelector(".description");
  title.textContent = randomBook.name;
  genre.textContent = `Género: ${randomBook.genre}`;
  pages.textContent = `Páginas: ${randomBook.pages}`;
  details.textContent = randomBook.details;
  img.setAttribute("src", randomBook.img);

  img.addEventListener("click", () => {
    const { textContent } = title;
    location.href = books[textContent].href;
  });
}

const button = document.querySelector("#randomizer");
button.addEventListener("click", randomPage);

randomPage();