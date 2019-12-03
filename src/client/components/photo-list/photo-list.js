import React, { Component } from 'react';


import { useStore } from "./../../store/useStore";

import Spinner from '../spinner';

import ErrorIndicator from '../error-indicator';
import PhotoListItem from '../photo-list-item';

import './photo-list.css';

const PhotoList = ({ photos }) => {
  return (

    <div className="tiles">
      {
        photos.map((photo) => {
          return <PhotoListItem photo={photo} key={photo.id}/>;
        })
      }
    </div>
  );
};

const PhotoListContainer=()=>  {


  const { state, dispatch } = useStore();
    const {photoList:{ photos, error, loading}} = state;
    
    if (loading) {
      return <Spinner />;
    }
    
    if (error) {
      return <ErrorIndicator />;
    }

    return <PhotoList photos={photos}/>;
}






export default PhotoListContainer;
