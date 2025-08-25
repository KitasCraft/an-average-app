import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <header className="Header-text">
                <div className="Header-desc">
                    <h1 className="serif-font title">Little Lemon</h1>
                    <h2 className="serif-font">Chicago</h2>
                    <br />
                    <p>
                        We are a family owned Mediterranean restaurant,
                        focused on traditional recipes served with a modern twist.
                    </p>
                    <br />
                    <Link to="/reservation">
                        <button className="btn-default">
                            Reserve table now!
                        </button>
                    </Link>
                </div>
                <figure className="Header-figure">
                    <img
                        src="/icons_assets/restauranfood.jpg"
                        alt="Food we have"
                        className="Header-img"
                    />
                </figure>
            </header>
        </>
    )
}

export default Header;