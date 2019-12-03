
const userRequested = () => {
    return {
      type: 'userRequested'
    };
  };

  const userSignIn = (user) => {
    return {
      type: 'userSignIn',
      payload:user
    };
  };

  const userExit=()=>{
    return{
        type: 'userExit'
    };
  };

  //с этим действием удаляем из локалстора
  const userError = (error) => {
    return {
      type: 'userError',
      payload:error
    };
  };



  export{
        userRequested, userSignIn, userError
  };