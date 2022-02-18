import React from 'react';
import {Link} from "react-router-dom";
import styles from './navbar.module.css';
import {Path} from "../../route";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.links}>
                <div className={styles.link}>
                    <Link to={Path.trades}>Trades</Link>
                </div>
                <div className={styles.link}>
                    <Link to={Path.offers}>Offers</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;