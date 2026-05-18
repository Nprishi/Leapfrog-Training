import { useState } from "react";

const Navbar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query.trim()) return;
        onSearch(query);
    };

    return (
        <nav className="navbar">
            <div className="logo">🎬 TMDB Movie App</div>

            <form className="nav-search" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </nav>
    );
};

export default Navbar;