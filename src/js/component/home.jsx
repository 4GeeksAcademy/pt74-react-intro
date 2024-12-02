import React from "react";
import BookCard from "./BookCard";

const library = [
  {
    title: "Something Wicked This Way Comes",
    author: "Ray Bradbury",
    cover: "https://pictures.abebooks.com/isbn/9780553136951-us.jpg",
    num_pages: 293,
    year_published: 1997,
    isbn13: "978-0-380-72940-1",
    isbn10: "0-380-72940-7",
    is_awesome: true,
  },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    cover: "https://m.media-amazon.com/images/I/81dy4cfPGuL._SY522_.jpg",
    num_pages: 383,
    year_published: 1970,
    isbn13: null,
    isbn10: "0-380-01503-X",
    is_awesome: true,
  },
  {
    title: "Snow Crash",
    author: "Neal Stephenson",
    cover:
      "https://i5.walmartimages.com/seo/Snow-Crash-Hardcover-9780613361620_f11eea3c-5e60-4a1b-936b-67c9c4455e27_1.0a9c061d4600a35fb739ad85e9e9aa06.jpeg",
    num_pages: 470,
    year_published: 1992,
    isbn13: "978-061336162",
    isbn10: null,
    is_awesome: true,
  },
  {
    title: "The Ultimate Hitchiker's Guide To The Galaxy",
    author: "Douglas Adams",
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1404613595i/13.jpg",
    num_pages: 815,
    year_published: 2002,
    isbn13: "978-0-645-45374-7",
    isbn10: null,
    is_awesome: true,
  },
];

//create your first component
const Home = () => {
  return (
    <>
      <div className="container-fluid d-flex flex-row flex-wrap justify-content-around pb-5">
        <h1>Hello world</h1>
      </div>
      <div className="container-fluid d-flex flex-row flex-wrap justify-content-around pb-5">
        {library.map((book) => (
          <BookCard book={book} />
        ))}
      </div>
    </>
  );
};

export default Home;
