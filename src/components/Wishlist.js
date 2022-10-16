import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../redux/booksSlice";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.books.wishlist);
  const dispatch = useDispatch();
  const handleOnClick = (title) => {
    dispatch(removeFromWishlist(title));
  };
  return (
    <div className="wishlist">
      {wishlist.map((title, index) => {
        return (
          <div key={index}>
            <span>{title}</span>
            <button onClick={() => handleOnClick(title)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};
export default Wishlist;
