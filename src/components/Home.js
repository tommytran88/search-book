import { useDispatch, useSelector } from "react-redux";
import { editSearchText, getBooksWithTitle } from "../redux/booksSlice";
import BookGroup from "./BookGroup/BookGroup";
import Loader from "./BookGroup/Loader";

const Home = () => {
  const isLoading = useSelector((state) => state.books.isLoading);
  const searchText = useSelector((state) => state.books.searchText);
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    dispatch(editSearchText(e.target.value));
    dispatch(getBooksWithTitle());
  };
  return (
    <div className="home">
      <input
        onChange={handleOnChange}
        placeholder="Enter book title"
        value={searchText}
      ></input>
      {isLoading ? <Loader /> : <BookGroup />}
    </div>
  );
};
export default Home;
