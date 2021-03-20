import { Link } from 'react-router-dom';

function ItemCard({ params }) {
    return (
        <li className="otherPet">
            <h3>Name: {params.name}</h3>
            <p>Category: {params.category}</p>
            <p className="img"><img src={params.imageURL} /></p>
            <p className="description">{params.description}</p>
            <div className="pet-info">
                <Link to="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></Link>
                <Link to={`/pets/details/${params.id}`}><button className="button">Details</button></Link>
                <i className="fas fa-heart"></i> <span>{params.likes} </span>
            </div>
        </li>
    );
}

export default ItemCard;