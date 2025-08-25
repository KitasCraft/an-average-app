function ReviewCard({ author, children}) {
    return (
        <>
            <article className="Specials-ReviewCard">
                <p aria-label="5 stars">⭐⭐⭐⭐⭐</p>
                <br />
                <h3>{author}</h3>
                <br />
                {children}
            </article>
        </>
    )
}

export default ReviewCard;