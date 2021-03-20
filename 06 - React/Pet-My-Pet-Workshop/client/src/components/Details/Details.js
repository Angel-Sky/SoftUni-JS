import { useEffect, useState } from 'react';

function Details({ match }) {
    let [pet, setPet] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/pets/${match.params.id}`)
            .then(res => res.json())
            .then(res => setPet(res));
    }, '')
    console.log(pet);
    
    return (
        <section className="detailsMyPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: <i className="fas fa-heart"></i> {pet.likes}</p>
            <p className="img"><img
                src={pet.imageURL} /></p>
            <form action="#" method="POST">
                <textarea type="text" name="description">{pet.description}</textarea>
                <button className="button"> Save</button>
            </form>
        </section>
    )
}

export default Details;