import "./HomeView.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function HomeView() {
  return (
    <>
      <Header />
      <div>
        <h1>Home</h1>
        <div className="home-container"></div>
      </div>
      <Footer />
    </>
  );
}

export default HomeView;