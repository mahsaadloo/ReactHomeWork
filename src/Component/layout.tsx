import * as React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
    return (
        <>
            <header> Navbar </header>
            <main> <Outlet /> </main>
            <footer> Footer </footer>
        </>
    )
}
export default Layout;