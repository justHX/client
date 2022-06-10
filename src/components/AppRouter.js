import React, {useContext} from 'react';
import {Route, Routes} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes";
import {Context} from "../index";

const AppRouter = () => {

    const {user} = useContext(Context)

    return (

        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <>
                    {console.log(user)}
                    <Route exact key={path} path={path} element={<Component/>}/>
                    {console.log(path)}
                </>
            )}
            {publicRoutes.map(({path, Component}) =>
                <>
                    <Route exact key={path} path={path} element={<Component/>}/>
                </>
            )}

        </Routes>
    );
};

export default AppRouter;