const booksApi = (title) => {
  const query = title.split(" ").join("+");
  return fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=0&maxResults=20`
  ).then((res) => res.json());
};

export default booksApi;
