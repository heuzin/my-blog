import { Fragment } from 'react';
import MainNavigation from '../mainNavigation/MainNavigation';

type Props = {
    children: React.ReactNode;
};

const Layout: React.FC<Props> = (props) => {
    return (
        <Fragment>
            <MainNavigation />
            <main>{props.children}</main>
        </Fragment>
    );
};

export default Layout;
