import { useDispatch, useSelector } from "react-redux";
import { editSearchText, getBooksWithTitle } from "../redux/booksSlice";
import BookGroup from "./BookGroup/BookGroup";
import Loader from "./BookGroup/Loader";

import { fromEvent } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { useEffect, useRef } from "react";

const Home = () => {
  const isLoading = useSelector((state) => state.books.isLoading);
  const searchText = useSelector((state) => state.books.searchText);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    dispatch(getBooksWithTitle(searchText));
  }, [dispatch, searchText]);

  const handleOnChange = () => {
    const debounceOnChange = fromEvent(inputRef.current, "keyup");
    debounceOnChange.pipe(debounceTime(500)).subscribe((e) => {
      dispatch(editSearchText(e.target.value));
    });
  };
  return (
    <div className="home">
      <input
        ref={inputRef}
        onChange={handleOnChange}
        defaultValue={searchText}
      ></input>
      {isLoading ? <Loader /> : <BookGroup />}
    </div>
  );
};
export default Home;
