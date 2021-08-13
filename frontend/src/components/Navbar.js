import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/auth';

const navbar = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const logoutHandler = () => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(logout());
    };

    const authLinks = (
        <>
            <li className='nav-item'>
                <Link href='/dashboard'>
                    <a className={
                        router.pathname === '/dashboard' ? 
                        'nav-link active' : 'nav-link'
                    }>
                        Dashboard
                    </a>
                </Link>
            </li>
            <li className='nav-item'>
                <a 
                    className='nav-link'
                    href='#!'
                    onClick={logoutHandler}
                >
                    Logout
                </a>
            </li>
        </>
    );

    const guestLinks = (
        <>
            <li className='nav-item'>
                <Link href='/register'>
                    <a className={
                        router.pathname === '/register' ? 
                        'nav-link active' : 'nav-link'
                    }>
                        Register
                    </a>
                </Link>
            </li>
            <li className='nav-item'>
                <Link href='/login'>
                    <a className={
                        router.pathname === '/login' ? 
                        'nav-link active' : 'nav-link'
                    }>
                        Login
                    </a>
                </Link>
            </li>
        </>
    );

    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
                <Link href='/'>
                    <a className='navbar-brand'>
                        httpOnly Auth
                    </a>
                </Link>
                <button 
                    className='navbar-toggler' 
                    type='button' 
                    data-bs-toggle='collapse' 
                    data-bs-target='#navbarNav' 
                    aria-controls='navbarNav' 
                    aria-expanded='false' 
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link  href='/'>
                                <a className={
                                    router.pathname === '/' ? 
                                    'nav-link active' : 'nav-link'
                                }>
                                    Home
                                </a>
                            </Link>
                        </li>
                        {
                            isAuthenticated ? authLinks : guestLinks
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default navbar;
