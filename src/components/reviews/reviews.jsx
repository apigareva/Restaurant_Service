export const Reviews = ({reviews}) => {
    return (
        <div>
            <h3>Reviews</h3>
            {reviews?.map(({id, user, text}) => (
                <div key={id}>
                <li>{user}: "{text}"</li>
                </div>
            ))}
        </div>
    );
}