import { Link } from "react-router";

function DishCard({ imgSrc, title, price, children}) {
    return (
        <>
            <article className="Specials-DishCard">
                <img src={imgSrc} alt="food" style={{
                    aspectRatio: "16/9",
                    width: "100%",
                    borderTopLeftRadius: "inherit",
                    borderTopRightRadius: "inherit",
                    filter: "brightness(95%)",
                    objectFit: "cover"
                }} />
                <div style={{ padding: "1rem"}}>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                        <h3>{title}</h3>
                        <p style={{
                            color: "red"
                        }}>{price}</p>
                    </div>
                    <br />
                    {children}
                    <br />
                    <Link to="/">
                        <button style={{
                            border: "none",
                            fontWeight: "bold",
                            width: "100%",
                            backgroundColor: "inherit"
                        }}>
                            Order now!
                        </button>
                    </Link>
                </div>
            </article>
        </>
    )
}

export default DishCard;