import "./App.css";
import User from "./components/User";
import UserOnClick from "./components/UserOnClick";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <h1>Hello GraphQL</h1>
      {/* <Users /> */}
      {/* <User /> */}
      <UserOnClick />
    </div>
  );
}

export default App;
