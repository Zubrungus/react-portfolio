import {Link} from 'react-router-dom';

export default function Navbar(){
    return (
        <nav>
            <ul>
                <Link key={1} to='/' >About</Link>
                <Link key={2} to='/portfolio' >Portfolio</Link>
                <Link key={3} to='/resume' >Resume</Link>
                <Link key={4} to='/contact' >Contact</Link>
            </ul>
        </nav>
    )
}
