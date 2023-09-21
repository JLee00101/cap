import classNames from 'classnames';
import styles from './navbar.module.scss';
import {  Link} from 'react-router-dom';
export interface NavbarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Navbar = ({ className }: NavbarProps) => {
    return (
        <nav className={styles.navBar}>
                <Link to='/frontpage'><h3 className={styles.navElement}>Home</h3>  
                </Link>
                <h3 className={styles.navElement}> Ongoing Projects</h3>
                <Link to='/projectpage'><h3 className={styles.navElement}> Upcoming Projects</h3></Link>
                <h3 className={styles.navElement}> Staff</h3>
    <h3 className={styles.navElement}> Profile</h3>
        </nav>
    );
};
