import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <nav>
                <div><h2>ASV.</h2></div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;