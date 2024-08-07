import "./SearchBar.css";

function SearchBar() {
  const clickMe = () => {
    console.log("clicked");
  };
  // arrow function since it's one liner
  return (
    <div className="searchBar">
      <input type="text" placeholder="Search"></input>
      <button className="btn" onClick={clickMe}>
        Search
      </button>
    </div>
  );
}
export default SearchBar;
