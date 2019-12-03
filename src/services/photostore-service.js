export default class PhotostoreService {


  _stas='http://gallery.dev.webant.ru/media/5bb352985e998554581493.jpg';
  _apiBase = 'http://gallery.dev.webant.ru/api';



  

getResource = async (url) => {
  const res = await fetch(`${this._apiBase}${url}`);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}` +
      `, received ${res.status}`)
  }
  return await res.json();
};

postResource = async (url, ...params) => {
  const res = await fetch(`${this._apiBase}${url}`,{
    method: 'POST',
    body: JSON.stringify(params)
  });
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}` +
      `, received ${res.status}`)
  }
  return await res.json();
};

  getPhotos = async ({New, Popular}) => {
    console.log(New);
    const res = await this.getResource(`/photos?new=${New}&popular=${Popular}&page=1&limit=32`);
    return  res.data
    .map(this._transformPhoto)
    .slice(0, 16);
  };


  getToken=async()=>{
    const res=await this.getResource(``);
    return  res.data._transformToken;
  };


  _transformToken=(data)=>{
    return {
      id: photo.id,
      name: photo.name,
      new: photo.new,
      popular: photo.popular,

      image: {
        id: photo.image.id,
        contentUrl: photo.image.contentUrl
      }
    }
  }

  _transformPhoto = (photo) => {
    return {
      id: photo.id,
      name: photo.name,
      new: photo.new,
      popular: photo.popular,

      image: {
        id: photo.image.id,
        contentUrl: photo.image.contentUrl
      }
    }
  }
}
