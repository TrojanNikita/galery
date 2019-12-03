

    const _apiBase = 'http://gallery.dev.webant.ru';
  
  
  
    
  
    const getResource =async (url) => {
        const res = await fetch(`${_apiBase}${url}`);  

        return await res.json();
    };
    
    const postResource = async (url,params) => {
        console.log(params);
        const res = await fetch(`http://gallery.dev.webant.ru${url}`,{
            method: 'POST',
            headers:{
                'accept': 'application/json',
                'Content-Type': 'application/json'  
            },
            body: JSON.stringify(params)
        });
        return await res.json();
    };


 export const create=async (params)=>{
        console.log(params);
        const res= postResource('/api/users',params);
        return await res;
    };
    

export const login=async (params)=>{
    const client_id=localStorage.getItem("id");
    const client_randomId=localStorage.getItem("randomId");
    const client_secret=localStorage.getItem("secret");
    const token= getToken({
        clientId:client_id+'_'+client_randomId,
        username:params.username,
        password:params.password,
        client_secret
    });
    //localStorage.setItem("token", token);
    return await token;
};


    const getToken=async ({clientId,username,password,client_secret})=>{
        const str=`/oauth/v2/token?client_id=${clientId}&grant_type=password&username=${username}&password=${password}&client_secret=${client_secret}`;
        console.log(str);
        const tokProm=getResource(str);
    return await tokProm;
    };
  
  
   const  _transformToken=(data)=>{
      return {
        accessToken:data.access_token,
        expires_in:data.expires_in,
        tokenType:data.token_type,
        scope:data.scope, 
        refreshToken:data.refresh_token

      }
    }

  