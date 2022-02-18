import React from 'react';
import {Route, Routes} from "react-router-dom";
import styles from './app.module.css';
import {Login} from "./views/login";
import {Path, PrivateRoute} from "./shared/route";
import {Registration} from "./views/registration";
import {Offers} from "./views/offers";
import {Footer, Header} from "./shared/components";
import {Navbar} from "./shared/components";
import {Trades} from "./views/trades";

const App = () => {

    return (
        <div className={styles.app}>
            <Routes>
                <Route path={Path.signIn} element={<Login/>}/>
                <Route path={Path.signUp} element={<Registration/>}/>
                <Route path={`${Path.trades}*`} element={
                    <PrivateRoute>
                            <Header/>
                            <Navbar/>
                        <Routes>
                            <Route path={`${Path.trades}*`} element={<Trades/>}/>
                            <Route path={`${Path.offers}/*`} element={<Offers/>}/>
                        </Routes>
                        <Footer/>
                    // </PrivateRoute>
                }/>
            </Routes>
        </div>
    );
};

export default App;
