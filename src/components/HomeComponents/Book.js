import { useDispatch } from "react-redux";
import { addToWishlist } from "../../redux/booksSlice";

const Book = ({ title, image, publisher, publishedDate, description }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addToWishlist(title));
  };
  return (
    <div className="book" onClick={handleClick}>
      <img src={image} alt={title} className="book__img" />
      <div className="book__details">
        <span>
          <b>Title:</b> {title}
        </span>
        <span>
          <b>Publisher:</b> {publisher}
        </span>
        <span>
          <b>Published Date:</b> {publishedDate}
        </span>
        <span>
          <b>Description:</b> {description}
        </span>
      </div>
    </div>
  );
};
export default Book;
