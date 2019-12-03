export const userInitialState = {
    user: null,
    error: null
  };


  export const photoReducer = {
    userRequested: (state,payload) => {
        return { 
            user: null,
            error: null
        }; 
    },
    userExit: (state,payload) => {
        return { 
            user: null,
            error: null
        }; 
    },
    userSignIn: (state,payload) => {
        return { 
            user: payload,
            error: null
        };
    },
    userError: (state,payload) => {
        return { 
            user: null,
            error: payload
            };
    }
  };


  

 
  