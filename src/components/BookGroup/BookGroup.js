import { useDispatch, useSelector } from "react-redux";
import { editCurrentPageNum } from "../../redux/booksSlice";
import Book from "./Book";

const BookGroup = () => {
  const amountOfBooksPerPage = 6;
  const booksData = useSelector((state) => state.books.booksData);
  const totalNumOfPages = Math.ceil(booksData.length / amountOfBooksPerPage);

  const pageArray = Array.from({ length: totalNumOfPages }, (_, i) => i + 1);
  const currentPageNum = useSelector((state) => state.books.currentPageNum);
  const dispatch = useDispatch();

  const handleOnClick = (num) => {
    dispatch(editCurrentPageNum(num));
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="home__books">
        {booksData.map(
          ({ id, ...other }, index) =>
            index >= (currentPageNum - 1) * amountOfBooksPerPage &&
            index < currentPageNum * amountOfBooksPerPage && (
              <Book key={id} {...other} />
            )
        )}
      </div>
      {/* pagination */}
      <div className="page__buttons">
        {pageArray.map((num) => (
          <button
            className={currentPageNum === num ? "button__selected" : null}
            key={num}
            onClick={() => handleOnClick(num)}
          >
            {num}
          </button>
        ))}
      </div>
    </>
  );
};
export default BookGroup;
