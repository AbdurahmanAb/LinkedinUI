import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./pages/Feed/Feed";
import "./App.scss";
const App = () => {
  return (
    <div>
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
      {/* //HEADER // APP BODY //SIDEBAR // FEED //WIDGETS*/}
    </div>
  );
};

export default App;
