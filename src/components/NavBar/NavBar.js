import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/elements">Elements</Link></li>
        </nav>
    )
}

export default NavBar