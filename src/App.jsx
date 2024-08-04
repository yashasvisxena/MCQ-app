import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Quiz from "./components/Quiz";

function App() {
  return (
    <div className="app min-h-screen flex flex-col items-center justify-center">
      <Navbar />
      <Quiz />
      <Footer />
    </div>
  );
}

export default App;
