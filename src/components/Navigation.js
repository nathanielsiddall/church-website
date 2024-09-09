import React, { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'primereact/menu';

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation();

    const items = [
        { label: 'About Us', icon: 'pi pi-fw pi-home', to: '/about-us' },
        { label: 'What We Believe', icon: 'pi pi-fw pi-book', to: '/what-we-believe' },
        { label: 'Our Media', icon: 'pi pi-fw pi-video', to: '/our-media' },
        { label: 'Contact Us', icon: 'pi pi-fw pi-envelope', to: '/contact-us' },
        { label: 'Learn', icon: 'pi pi-fw pi-pencil', to: '/Learn' },
        { label: 'Our Schedule', icon: 'pi pi-fw pi-calendar', to: '/our-schedule' },
    ];

    const logo = (
        <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/pinecrestBicolorInverted.svg`} className="mr-5" height="80" alt="logo" />
        </Link>
    );

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div>
            {location.pathname === '/' ? (
                <>
                    <Button
                        icon="pi pi-bars"
                        onClick={toggleMenu}
                        className="p-button-rounded p-button-text"
                        style={{
                            position: 'absolute',
                            top: '20px',
                            left: '20px',
                            zIndex: 100
                        }}
                    />

                    <Sidebar visible={showMenu} onHide={toggleMenu} position="left">
                        <h3>Menu</h3>
                        <Menu
                            className="w-full md:w-15rem"
                            model={items.map(item => ({
                                ...item,
                                command: () => window.location.href = item.to
                            }))}
                        />
                    </Sidebar>
                </>
            ) : (
                <Menubar
                    model={items.map(item => ({
                        ...item,
                        command: () => window.location.href = item.to
                    }))}
                    start={logo}
                    style={{
                        position: 'sticky',
                        top: 0,
                        zIndex: 100000, // High z-index to stay above the video and overlay
                        // backgroundColor: '#333'
                    }}
                />
            )}
        </div>

    );
};

export default Navigation;
