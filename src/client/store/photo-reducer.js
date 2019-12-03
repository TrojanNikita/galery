export const photoInitialState = {
    photoList: {
        photos: [],
        loading: true,
        error: null
    }
  };


  export const photoReducer = {
    photosRequested: (state,payload) => {
      console.log('photosRequested');
        console.log(state);
      console.log(payload);
      return { photoList: { 
        photos: [],
        loading: true,
        error: null
      } };
    },
    photosLoaded: (state,payload) => {
      console.log('photosLoaded');
      console.log(state);
      console.log(payload);
      return { photoList: { 
        photos: payload,
        loading: false,
        error: null
      } };
    },
    photosError: (state,payload) => {
      console.log('photosError');
      console.log(state);
      console.log(payload);
        return { photoList: { 
          photos: [],
          loading: false,
          error: payload
        } };
      }
  };


  

 
  