import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import cls from './Navbar.module.scss';
import logo from 'shared/assets/logo/39740303.svg'
import { navLinks } from '../constants/navLinks';

const Navbar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className= {cls.Navbar}>
            <div className={cls.container}>
                <div className={cls.navItems}>
                    <div className={cls.logoContainer}>
                        <img className={cls.logo} src={logo} alt="logo" />
                    </div>
                    <ul className={cls.links}>
                            {navLinks.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                    </ul>
                    <div className={cls.orderCallButtonContainer}>
                        <a className={cls.orderCallButton} href="">
                            Заказать звонок
                        </a>
                    </div>   
                    <div className={cls.burgerMenuContainer}>
                        <button onClick={toggleMenu}>
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>   
                {mobileMenuOpen && (
                    <div className={cls.mobileMenuContainer}>
                        <ul>
                            {navLinks.map((item, index) => (
                                <li key={index} className={cls.mobileMenuLinksItem}>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div>
                            <a className={cls.orderCallButton} href="">
                                Заказать звонок
                            </a>
                        </div>
                    </div>
                )}    
            </div>
        </nav>
    );

}

export default Navbar;