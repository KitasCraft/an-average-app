import { Link } from "react-router";

function Footer() {
    return (
        <>
            <footer className="Footer">
                <p>Copyright Little Lemon 2025. All Rights Reserved.</p>
                <br />
                <Link to="/contact-us">
                    <p style={{
                        color: "white"
                    }}>Contact us.</p>
                </Link>
            </footer>
        </>
    );
}

export default Footer;