import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import cls from './Navbar.module.scss';
import logo from 'shared/assets/logo/39740303.svg'
import { navLinks } from '../constants/navLinks';
import { OrderCallModal } from 'features/OrderCallModal';
import { Button } from 'shared/ui/Button';

const Navbar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isTransparent, setIsTransparent] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleScroll = () => {
        const position = window.scrollY;
        if (position > 50) {
            setIsTransparent(true);
        } else {
            setIsTransparent(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className= {`${cls.Navbar} ${mobileMenuOpen ? cls.menuOpen : ''} ${isTransparent ? cls.NavbarTransparent : cls.NavbarOpaque}`}>
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
                            <Button 
                                value={'Заказать звонок'} 
                                onClick={toggleModal}
                            />
                        </div>   
                        <div className={cls.burgerMenuContainer}>
                            <button onClick={toggleMenu}>
                                {mobileMenuOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>   
                    <div className={`${cls.mobileMenuContainer} ${mobileMenuOpen ? cls.open : ''}`}>
                        <ul>
                            {navLinks.map((item, index) => (
                                <li key={index} className={cls.mobileMenuLinksItem}>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div>
                            <Button 
                                value={'Заказать звонок'} 
                                onClick={toggleModal}
                            />
                        </div>
                    </div>
                </div>
            </nav>
            <OrderCallModal isOpen={isModalOpen} onClose={toggleModal} />
        </>
        
    );

}

export default Navbar;