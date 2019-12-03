import React,{useState, useEffect}  from 'react';

import Header from '../header';
import PhotoList from '../photo-list';
import compose from '../../components/utils/compose';
import { withPhotostoreService } from '../hoc';
import {photosRequested, photosLoaded, photosError} from '../../store/photo-actions';

import connect from '../hoc/connect';


//Вид, с возможностью переключать активную категорию
const Home=({active, changeActive})=>{
  return(
    <div>
      <Header active={active} changeActive={(c)=>changeActive(c)}/>
      <PhotoList/>
    </div>
  );
};





//пока что здесь переадресация: на продукты, если вошли
//на вход, если не вошли
const HomeContainer = ({photosRequested,photosLoaded,photosError,photostoreService}) => {


  // const { state, dispatch } = useStore();
  //на этом уровне будем держать параметры: new, popular, page, limit
  //в header часть из них меняется, если добавить footer, там тоже можно менять
  const [active, setActive] = useState('New');

  //const fetchPhotos=useCallback( () => dispatch({type:"photosRequested"}),[active,state]);


  //подгружаем данные, если изменяется активный элемент из header
  useEffect(() => {
        photosRequested();
        photostoreService.getPhotos({New:active==='New', Popular:active==='Popular'})
            .then((data) => photosLoaded(data))
            .catch((err) => photosError(err));
      },[active]);


  return(
    <Home
      active={active}
      changeActive={setActive}/>
  );
};


const mapStateToProps = ({ photoList: { photos, loading, error }}) => {
  return { photos, loading, error };
};


const mapDispatchToProps = (dispatch) => ({
   photosRequested:()=>dispatch(photosRequested()),
   photosLoaded:(np)=>dispatch(photosLoaded(np)),
   photosError:(er)=>dispatch(photosError(er))
});


export default compose(
  withPhotostoreService(),
  connect(mapStateToProps,mapDispatchToProps))
  (HomeContainer);
