import { useSelector } from "react-redux";
import Book from "./Book";

const BookGroup = () => {
  const booksData = useSelector((state) => state.books.booksData);
  return (
    <div className="home__content">
      {booksData.map(({ id, ...other }) => (
        <Book key={id} {...other} />
      ))}
    </div>
  );
};
export default BookGroup;
