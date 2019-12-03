
const photosRequested = () => {
    return {
      type: 'photosRequested'
    };
  };
  
  const photosLoaded = (newPhotos) => {
    return {
      type: 'photosLoaded',
      payload: newPhotos
    };
  };
  
  const photosError = (error) => {
    return {
      type: 'photosError',
      payload: error
    };
  };


  export{
        photosError, photosLoaded, photosRequested
  };