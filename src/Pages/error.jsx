import {Link} from 'react-router-dom';

export default function Error() {
    return (
        <div /*style={{ width: '100%', height: '100%', display: 'flex' }}*/>
            <p>
                An error has occured, page not found
            </p>
            <Link to='/' >Return to main page</Link>
        </div>
    );
};