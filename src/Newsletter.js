import { Link } from "react-router";

function Newsletter() {
    return (
        <>
            <section style={{
                padding: "2rem 2%"
            }}>
                <h2 className="serif-font centered">Always wanted to keep up with our products?</h2>
                <br />
                <Link to="/">
                    <div className="centered">
                        <button className="btn-default">
                            Notify me!
                        </button>
                    </div>
                </Link>
            </section>
        </>
    )
}

export default Newsletter;