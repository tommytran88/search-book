import { useSelector } from "react-redux";
import { amountOfBooksPerPage } from "../Home";
import Book from "./Book";

const BookGroup = () => {
  const booksData = useSelector((state) => state.books.booksData);
  const currentPageNum = useSelector((state) => state.books.currentPageNum);

  return (
    <div className="home__books">
      {/* pagination */}
      {booksData.map(
        ({ id, ...other }, index) =>
          index >= (currentPageNum - 1) * amountOfBooksPerPage &&
          index < currentPageNum * amountOfBooksPerPage && (
            <Book key={id} {...other} />
          )
      )}
    </div>
  );
};
export default BookGroup;
