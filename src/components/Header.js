import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h2>Book Search</h2>
      <Link to="/">Home</Link>
      <Link to="wishlist">Wishlist</Link>
    </header>
  );
};
export default Header;
