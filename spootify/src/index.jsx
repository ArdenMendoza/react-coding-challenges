import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import CoreLayout from './common/layouts/CoreLayout';
import './styles/_main.scss';
import { spotifyWebApi } from './auth/authModule';
import { loginUrl, getTokenFromUrl } from './config';


const loadReactApp = async () => {
    const accessToken = getTokenFromUrl().accessToken;
    window.location.hash = "";
    alert(accessToken);

    if (accessToken) {
        ReactDOM.render(
            <React.StrictMode>
                <CoreLayout>
                    <Routes />
                </CoreLayout>
            </React.StrictMode>,
            document.getElementById('root')
        );
    } else {
        window.location.replace(loginUrl);
    }

}

loadReactApp();