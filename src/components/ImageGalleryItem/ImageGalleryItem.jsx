import css from './ImageGalleryItem.module.css';
import { FallingLines } from 'react-loader-spinner';
import PropTypes from 'prop-types';

export const Item = ({ images, onClick, Loader }) => {
  return (
    <>
      {images.map(({ id, webformatURL }) => (
        <li onClick={onClick} className={css.item} key={id} id={id}>
          {Loader ? (
            <FallingLines
              color="#4fa94d"
              width="100"
              visible={true}
              ariaLabel="falling-lines-loading"
            />
          ) : (
            <img className={css.image} src={webformatURL} alt="" />
          )}
        </li>
      ))}
    </>
  );
};

Item.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
  Loader: PropTypes.bool.isRequired,
};
// import React from 'react';

// const ImageGalleryItem = ({ image }) => {
//   return (
//     <li className="gallery-item">
//       <img src={image.webformatURL} alt="" />
//     </li>
//   );
// };

// export default ImageGalleryItem;
// import React from 'react';
// import {
//   StyledGalleryItem,
//   StyledGalleryItemImage,
// } from './ImageGalleryItem.styled';

// const ImageGalleryItem = ({ image, onClick }) => (
//   <StyledGalleryItem className="gallery-item" onClick={onClick}>
//     <StyledGalleryItemImage
//       src={image.webformatURL}
//       alt={image.tags}
//       className="gallery-item-image"
//     />
//   </StyledGalleryItem>
// );

// export default ImageGalleryItem;
