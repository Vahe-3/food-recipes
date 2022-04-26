const Footer = () => {
    return (
        <div className="Footer">
            <footer className="page-footer teal darken-3">
                <div className="footer-copyright">
                    <div className="container">
                        <div>Best Food</div>

                        © {new Date().getFullYear()}

                    </div>
                </div>
            </footer>
        </div>
    )
};

export default Footer;