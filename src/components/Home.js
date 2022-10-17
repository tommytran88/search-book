import { useSelector } from "react-redux";
import BookGroup from "./HomeComponents/BookGroup";
import Loader from "./HomeComponents/Loader";
import PageButtons from "./HomeComponents/PageButtons";
import SearchInput from "./HomeComponents/SearchInput";

export const amountOfBooksPerPage = 6;

const Home = () => {
  const isLoading = useSelector((state) => state.books.isLoading);
  return (
    <div className="home">
      <SearchInput />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <BookGroup />
          <PageButtons />
        </>
      )}
    </div>
  );
};
export default Home;
