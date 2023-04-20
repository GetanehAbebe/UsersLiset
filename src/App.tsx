import { Provider } from "react-redux";
import "./App.css";
import Users from "./pages/Users";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Users users={[]} />
      </div>
    </Provider>
  );
}

export default App;
