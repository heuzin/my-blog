import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import Logo from '../logo/Logo';
import classes from './MainNavigation.module.css';
import { Fragment } from 'react';

const MainNavigation = () => {
    const { data: session, status } = useSession();

    const logoutHandler = () => {
        signOut();
    };

    return (
        <header className={classes.header}>
            <Link href={'/'}>
                <a>
                    <Logo />
                </a>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href={'/posts'}>Posts</Link>
                    </li>
                    <li>
                        <Link href={'/contact'}>Contact</Link>
                    </li>
                    {!session && status !== 'loading' && (
                        <li>
                            <Link href="/auth">Login</Link>
                        </li>
                    )}
                    {session && (
                        <Fragment>
                            <li>
                                <Link href="/profile">Profile</Link>
                            </li>
                            <li>
                                <button onClick={logoutHandler}>Logout</button>
                            </li>
                        </Fragment>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
