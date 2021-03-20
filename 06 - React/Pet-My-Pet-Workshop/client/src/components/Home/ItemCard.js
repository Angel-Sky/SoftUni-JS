function ItemCard({params}) {
    return (
        <li className="otherPet">
            <h3>Name: {params.name}</h3>
            <p>Category: {params.category}</p>
            <p className="img"><img src={params.imageURL} /></p>
            <p className="description">{params.description}</p>
            <div className="pet-info">
                <a href="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></a>
                <a href="#"><button className="button">Details</button></a>
                <i className="fas fa-heart"></i> <span>{params.likes} </span>
            </div>
        </li>
    );
}

export default ItemCard;