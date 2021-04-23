import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from './routes';
import CoreLayout from './common/layouts/CoreLayout';
import './styles/_main.scss';
import { spotifyWebApi } from './auth/authModule';
import { loginUrl, getTokenFromUrl } from './config';
import { Provider } from 'react-redux';
import store from './store/store';


const loadReactApp = async () => {
    const accessToken = getTokenFromUrl().access_token;
    window.location.hash = "";

    accessToken && spotifyWebApi.setAccessToken(accessToken);

    if (spotifyWebApi.getAccessToken()) {
        ReactDOM.render(
            <React.StrictMode>
                <Provider store={store()}>
                    <CoreLayout>
                        <Routes />
                    </CoreLayout>
                </Provider>
            </React.StrictMode>,
            document.getElementById('root')
        );
    } else {
        window.location.replace(loginUrl);
    }

}

loadReactApp();