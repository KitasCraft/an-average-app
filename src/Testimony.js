import ReviewCard from "./ReviewCard";

function Testimony() {
    return (
        <>
            <section style={{
                backgroundColor: "#495E57",
                padding: "2rem 2%",
                color: "white"
            }}>
                <h2 className="serif-font">Testimonials</h2>
                <br />
                <div style={{
                    display: "flex",
                    justifyContent: "space-evenly"
                }}>
                    <ReviewCard author="Jake Grunn">
                        This restaurant is Jake certified! I cannot recommend it enough!
                    </ReviewCard>
                    <ReviewCard author="Lenn Rezzine">
                        I love this restaurant so much! The meals and services are decent but the skibidi song is amazing!
                    </ReviewCard>
                    <ReviewCard author="Felise Filipe">
                        My mom love the meals provided by this restaurant even though I never went here!
                    </ReviewCard>
                </div>
            </section>
        </>
    )
}

export default Testimony;