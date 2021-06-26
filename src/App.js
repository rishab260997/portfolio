import Routes from "./Route";
import { Provider } from "react-redux";
import store from "./Redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
