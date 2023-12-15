import React from 'react';
import {
  StyledGalleryItem,
  StyledGalleryItemImage,
} from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ image, onClick }) => (
  <StyledGalleryItem className="gallery-item" onClick={onClick}>
    <StyledGalleryItemImage
      src={image.webformatURL}
      alt={image.tags}
      className="gallery-item-image"
    />
  </StyledGalleryItem>
);

export default ImageGalleryItem;
