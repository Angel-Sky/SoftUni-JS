import { NavLink } from 'react-router-dom';
import './CategoryNavigation.css'

function CategoryNavigation() {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink activeClassName="category-selected" to="/categories/all">All</NavLink></li>
                <li><NavLink activeClassName="category-selected" to="/categories/Cat">Cats</NavLink></li>
                <li><NavLink activeClassName="category-selected" to="/categories/Dog">Dogs</NavLink></li>
                <li><NavLink activeClassName="category-selected" to="/categories/Parrot">Parrots</NavLink></li>
                <li><NavLink activeClassName="category-selected" to="/categories/Reptile">Reptiles</NavLink></li>
                <li><NavLink activeClassName="category-selected" to="/categories/others">Other</NavLink></li>
            </ul>
        </nav>
    )
}

export default CategoryNavigation;