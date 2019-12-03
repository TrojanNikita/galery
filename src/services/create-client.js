
 const createClient=(params)=>{
    const res=fetch(`http://gallery.dev.webant.ru/api/clients`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'accept':'application/json'
        },
        body: JSON.stringify(params)
      }).then(res=>res.json()).then(data => {
        if (data.error) {
          //Тут прописываем логику
        } else {
          localStorage.setItem("id", data.id);
          localStorage.setItem("randomId", data.randomId);
          localStorage.setItem("secret", data.secret);
        }
    });
};

export default createClient;