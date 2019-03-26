import React from 'react';
import NotFound from './NotFound';
import Image from './Image';

const Gallery = (props) => {
  const results = props.data;
  let images;

  if (results.length > 0) {
    images = results.map(image => {
      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_q-${secret}_q.jpg`;
      return <Image url={url} key={id} alt={title} />
    });
  } else {
    images = <NotFound />
  }

  return (
    <ul>
      { images }
    </ul>
  );
};



export default Gallery;
