import React,{useState} from 'react';
import './photo-list-item.css';

const PhotoListItem = ({ photo }) => {

  const [open, setOpen] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);

  const {name,  image: {contentUrl} } = photo;

// Event handlers to modify state values
    function _mouseEnter(e) {
        e.preventDefault();
        if (mouseOver === false) {
          console.log(name);
          setMouseOver(true);
        }
    }
    function _mouseLeave(e) {
    e.preventDefault();
        if (mouseOver === true) {
          setMouseOver(false);
        }
    }
    function _clickHandler(e) {
        e.preventDefault();
        if (open === false) setOpen(true);
        else setOpen(false);
    }

    // Modify styles based on state values
    let tileStyle = {};
    let headerStyle = {};
    let zoom = {};

    // When tile clicked
    if (open) {
      tileStyle = {
        width: '62vw',
        height: '62vw',
        position: 'absolute',
        top: '50%',
        left: '50%',
        margin: '0',
        marginTop: '-31vw',
        marginLeft: '-31vw',
        boxShadow: '0 0 20px 5px rgba(0, 0, 0, 0.3)',
        transform: 'none'
      };
    } else {
      tileStyle = {
        width: '15vw',
        height: '15vw'
      };
    }

    return (
      <div className="tile">
        <img
          onMouseEnter={_mouseEnter}
          onMouseLeave={_mouseLeave}
          onClick={_clickHandler}
          src={`http://gallery.dev.webant.ru/media/${contentUrl}`}
          alt={name}
          style={tileStyle}
        />
      </div>
    );
};

export default PhotoListItem;


// const {  image: {contentUrl} } = photo;
// return (
//       <img className='img-fluid' src={`http://gallery.dev.webant.ru/media/${contentUrl}`} alt="picture" />
// );