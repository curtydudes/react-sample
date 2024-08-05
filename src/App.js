import "./App.css";
import logo from "./assets/images/dinnerDaddyLogo.png";
import SearchBar from "./components/SearchBar/SearchBar";
import User from "./components/User/User";
import bankUsers from "./assets/data/bankUsers.json";

function App() {
  const bankEmployee = {
    name: "Yael",
    balance: 10000,
    email: "spongecola@gmail.com",
  };

  const address = {
    houseNo: 74,
    street: "Manila Street",
    country: "Philippines",
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      {/* img src="./assets/image/logo.png" */}
      <img src={logo} alt="logo"></img>
      <SearchBar></SearchBar>
      {/* <SearchBar/> */}
      <User employee={bankEmployee} address={address}></User>
      {bankUsers.map((bankUsers) => {
        return (
          <div key={bankUsers.id}>
            {bankUsers.name} {bankUsers.balance}
          </div>
        );
      })}
    </div>
  );
}

export default App;
