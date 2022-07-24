import "./App.css";
import CreateUser from "./components/CreateUser";
import DeleteUser from "./components/DeleteUser";
import UpdataUser from "./components/UpdataUser";
import User from "./components/User";
import UserOnClick from "./components/UserOnClick";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <h1>Hello GraphQL</h1>
      {/* <Users /> */}
      {/* <User /> */}
      {/* <UserOnClick /> */}
      {/* <CreateUser /> */}
      {/* <UpdataUser /> */}
      <DeleteUser />
    </div>
  );
}

export default App;
