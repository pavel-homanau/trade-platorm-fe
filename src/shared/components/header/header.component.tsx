import React from 'react';
import styles from './header.module.css';
import {removeUserToken} from "../../../utility/session-storage";
import {Button} from "../../ui";
import {observer} from "mobx-react-lite";
import {AuthStore} from "../../../store/auth-store";

const Header = observer(() => {

    const {removeToken} = AuthStore

    const logout = () => {
        removeUserToken()
        removeToken()
    }

    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <h1>Trade Platform</h1>
            </div>
            <Button style={{width: '100px', marginRight: '10px'}} onClick={logout}>Logout</Button>
        </header>
    );
});

export default Header;