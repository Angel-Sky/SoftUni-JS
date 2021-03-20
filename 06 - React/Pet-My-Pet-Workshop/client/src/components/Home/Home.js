import { useEffect, useState } from 'react';
import './Home.css';
import CategoryNavigation from './CategoryNavigation';
import ItemCard from './ItemCard';

function Home({ match }) {
    const [pets, setPets] = useState([])

    useEffect(() => {
        let category = match.params.category;
        let queryString = (category && category != 'all') ? `?category=${category}` : '';

        fetch(`http://localhost:5000/pets${queryString}`)
            .then(res => res.json())
            .then(res => setPets(res));
    }, [])

    return (
        <section className="dashboard">
            <h1>Dashboard</h1>
            <CategoryNavigation />
            <ul className="other-pets-list">
                {pets.map(x => <ItemCard key={x.id} params={x} />)}
            </ul>
        </section>
    );
}

export default Home;
