import DishCard from "./DishCard";
import { Link } from "react-router";

function Specials() {
    return (
        <>
            <section style={{
                padding: "2rem 0"
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "1rem 2%",
                    paddingTop: 0,
                    alignItems: "center"
                }}>
                    <h2 className="serif-font">Specials</h2>
                    <Link to="/order-online">
                        <button className="btn-default">
                            More dishes
                        </button>
                    </Link>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "space-evenly"
                }}>
                    <DishCard title="Bruchetta" price="$5.99" imgSrc="/icons_assets/bruchetta.svg">
                        <p>Very delicious, should try! I haven't tried it and yet I'm hungry now ;~;</p>
                    </DishCard>
                    <DishCard title="Greek Salad" price="$12.99" imgSrc="/icons_assets/greek salad.jpg">
                        <p>Dunno if it's actually from Greece, but it's a salad, man!</p>
                    </DishCard>
                    <DishCard title="Lemon Dessert" price="$4.99" imgSrc="/icons_assets/lemon dessert.jpg">
                        <p>Ah, a nice dessert for your dinner, unless you hate lemons.</p>
                    </DishCard>
                </div>
            </section>
        </>
    )
}

export default Specials;