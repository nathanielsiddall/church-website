import React, { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'primereact/menu';
import invertedChurchLogo from './PinecrestBicolorInverted.svg';

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const items = [
        { label: 'About Us', icon: 'pi pi-fw pi-home', to: '/about-us' },
        { label: 'What We Believe', icon: 'pi pi-fw pi-book', to: '/what-we-believe' },
        { label: 'Our Media', icon: 'pi pi-fw pi-video', to: '/our-media' },
        { label: 'Contact Us', icon: 'pi pi-fw pi-envelope', to: '/contact-us' },
        { label: 'Learn', icon: 'pi pi-fw pi-pencil', to: '/learn' },
        { label: 'Our Schedule', icon: 'pi pi-fw pi-calendar', to: '/our-schedule' },
    ];

    const logo = (
        <Link to="/">
            <img src={invertedChurchLogo} className="mr-5" height="80" alt="logo" />
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
                                command: () => navigate(item.to)
                            }))}
                        />
                    </Sidebar>
                </>
            ) : (
                <Menubar
                    model={items.map(item => ({
                        ...item,
                        command: () => navigate(item.to) // Use navigate instead of window.location.href
                    }))}
                    start={logo}
                    style={{
                        position: 'sticky',
                        top: 0,
                        zIndex: 100000, // High z-index to stay above the video and overlay
                    }}
                />
            )}
        </div>

    );
};

export default Navigation;
