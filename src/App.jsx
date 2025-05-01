import { Outlet } from "react-router-dom";
import Genres from "./components/Genres.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MovieView from "./MoviesView.jsx";

function MoviesView() {
    return (
        <>
            <Header /> {/* Header is rendered here */}
            <div className="movies-view-container">
                <aside className="genres-sidebar">
                    <h1 className="genres-title">Genres:</h1>
                    <Genres />
                </aside>
                <main className="movies-main-content">
                    <Outlet /> {/* Nested routes like GenreView or MovieDetailView will render here */}
                </main>
            </div>
            <Footer />
        </>
    );
}

export default MoviesView;