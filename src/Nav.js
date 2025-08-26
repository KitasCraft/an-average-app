import { Link } from "react-router";

function Nav() {
    return (
        <>
            <nav>
                <img src="/icons_assets/Logo.svg" alt="Little Lemon" className="Nav-logo"></img>
                <ul className="Nav-tab">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/menu">MENU</Link></li>
                    <li><Link to="/reservation">RESERVATION</Link></li>
                    <li><Link to="/order-online">ORDER ONLINE</Link></li>
                    <li><Link to="/sign-in">SIGN IN</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;