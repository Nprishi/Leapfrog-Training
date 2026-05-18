const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} TMDB Movie App</p>
            <p>Built with React + TMDB API 🎬</p>
        </footer>
    );
};

export default Footer;