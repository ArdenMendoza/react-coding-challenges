import React, { Component } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import { spotifyWebApi } from '../../../auth/authModule';
import store from '../../../store/store'

export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: []
    };
  }

  render() {
    const { newReleases, playlists, categories } = this.state;
    spotifyWebApi.getNewReleases().then(res => store().dispatch({ type: 'LOAD_NEW_RELEASES', payload: res.albums.items }));
    spotifyWebApi.getFeaturedPlaylists().then(res => store().dispatch({ type: 'LOAD_FEATURED_PLAYLISTS', payload: res.playlists.items}));
    spotifyWebApi.getCategories().then(res => store().dispatch({ type: 'LOAD_CATEGORIES', payload: res.categories.items}));

    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={store().getState().discover.newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
  }
}
