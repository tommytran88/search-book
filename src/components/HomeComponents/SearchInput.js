import { useDispatch, useSelector } from "react-redux";

import { fromEvent } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { useEffect, useRef } from "react";
import { editSearchText, getBooksWithTitle } from "../../redux/booksSlice";

const SearchInput = () => {
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
    <input
      ref={inputRef}
      onChange={handleOnChange}
      defaultValue={searchText}
    ></input>
  );
};

export default SearchInput;
