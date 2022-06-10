import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Users from "./data/Users";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        user: new Users()
    }}>
        <App/>
    </Context.Provider>

);

