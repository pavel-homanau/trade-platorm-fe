import React from 'react';
import {Navigate} from 'react-router-dom';
import {observer} from "mobx-react-lite";
import {Path} from "../path";
import {AuthStore} from "../../../store/auth-store";

const PrivateRoute:React.FC = observer(({children}) => {
    const {authorization} = AuthStore;
    return <>{authorization ? children : <Navigate to={Path.signIn}/>}</>;
});

export default PrivateRoute;
