// import icon from "../public/icons_assets/icon.svg"

function Nav() {
    return (
        <>
            <nav>
                <img src="/icons_assets/Logo.svg" alt="Little Lemon"></img>
                <ul>
                    <li><a href="/home">HOME</a></li>
                    <li><a href="/about">ABOUT</a></li>
                    <li><a href="/menu">MENU</a></li>
                    <li><a href="/reservation">RESERVATION</a></li>
                    <li><a href="/order-online">ORDER ONLINE</a></li>
                    <li><a href="/sign-in">SIGN IN</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;