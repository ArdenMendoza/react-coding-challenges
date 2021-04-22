import React from 'react';
import Discover from './Discover';
import { getTokenFromUrl, loginUrl } from '../config';
import { spotifyWebApi } from '../auth/authModule';

export default function Routes() {
  // Here you'd return an array of routes
  // React.useEffect(() => {
    // const _token = getTokenFromUrl().access_token;
  //   window.location.hash = "";
  //   if (_token) {
  //     console.log('there is a token', _token);
  //     spotifyWebApi.setAccessToken(_token);
  //     spotifyWebApi.getMe().then(user => {
  //       console.log('user: ', user);
  //     })
  //   } else {
  //     window.location.replace(loginUrl);
  //   }
  // }, []);
  return <Discover newReleases={[]} playlists={[]} categories={[]} />;
}