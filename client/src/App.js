import { useSelector } from "react-redux";
import Login from "./pages/Login";


function App() {
  console.log(useSelector(state => state.user.user));
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
