import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (

    <>
      <Header />

      <Main className="flex-grow-1" />

      <Footer />
    </>
  );
}

export default App;
