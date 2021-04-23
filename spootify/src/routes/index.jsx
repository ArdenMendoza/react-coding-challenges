import React from 'react';
import Discover from './Discover';
import { getTokenFromUrl, loginUrl } from '../config';
import { spotifyWebApi } from '../auth/authModule';

export const Routes = () => {
  // Here you'd return an array of routes
  return <Discover newReleases={[]} playlists={[]} categories={[]} />;
}