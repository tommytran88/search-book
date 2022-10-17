import { useDispatch, useSelector } from "react-redux";
import { editCurrentPageNum } from "../../redux/booksSlice";
import { amountOfBooksPerPage } from "../Home";

const PageButtons = () => {
  const booksData = useSelector((state) => state.books.booksData);
  const currentPageNum = useSelector((state) => state.books.currentPageNum);

  const totalNumOfPages = Math.ceil(booksData.length / amountOfBooksPerPage);
  const pageArray = Array.from({ length: totalNumOfPages }, (_, i) => i + 1);
  const dispatch = useDispatch();

  const handleOnClick = (num) => {
    dispatch(editCurrentPageNum(num));
    window.scrollTo(0, 0);
  };

  return (
    <div className="page__buttons">
      {/* pagination */}
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
  );
};
export default PageButtons;
