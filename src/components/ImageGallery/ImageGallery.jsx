import css from './ImageGallery.module.css';
import { Item } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export const Gallery = ({ images, onClick, Loader }) => {
  return (
    <>
      <ul className={css.imageGallery}>
        {<Item Loader={Loader} onClick={onClick} images={images} />}
      </ul>
    </>
  );
};

Gallery.propTypes = {
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

// import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
// import React, { Component } from 'react';

// class ImageGallery extends Component {
//   render() {
//     const { images } = this.props;
//     return (
//       <ul className="gallery">
//         {images.map((image, index) => (
//           <ImageGalleryItem key={`${image.id}_${index}`} image={image} />
//         ))}
//       </ul>
//     );
//   }
// }

// export default ImageGallery;
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// import Button from '../Button/Button';
// import Loader from '../Loader/Loader';
// import Modal from '../Modal/Modal';
// import {
//   GalleryContainer,
//   GalleryList,
//   LoadMoreContainer,
// } from './ImageGallery.styled';

// class ImageGallery extends Component {
//   componentDidUpdate(prevProps) {
//     if (prevProps.query !== this.props.query) {
//       this.props.resetImages();
//     }
//   }

//   render() {
//     const {
//       images,
//       isLoading,
//       showModal,
//       modalImage,
//       onOpenModal,
//       onCloseModal,
//       handleLoadMore,
//       loadMore,
//     } = this.props;

//     return (
//       <GalleryContainer>
//         <GalleryList>
//           {images.map((image, index) => (
//             <ImageGalleryItem
//               key={`${image.id}_${index}`}
//               image={image}
//               onClick={() => onOpenModal(image.largeImageURL)}
//             />
//           ))}
//         </GalleryList>

//         {isLoading && <Loader />}

//         {images.length > 0 && !isLoading && loadMore && (
//           <LoadMoreContainer>
//             <Button onClick={handleLoadMore} />
//           </LoadMoreContainer>
//         )}

//         {images.length > 0 && !isLoading && !loadMore && (
//           <p>No more images to load.</p>
//         )}

//         {showModal && <Modal imageURL={modalImage} onClose={onCloseModal} />}
//       </GalleryContainer>
//     );
//   }
// }

// ImageGallery.propTypes = {
//   images: PropTypes.array.isRequired,
//   isLoading: PropTypes.bool.isRequired,
//   showModal: PropTypes.bool.isRequired,
//   modalImage: PropTypes.string.isRequired,
//   onOpenModal: PropTypes.func.isRequired,
//   onCloseModal: PropTypes.func.isRequired,
//   fetchImages: PropTypes.func.isRequired,
//   resetImages: PropTypes.func.isRequired,
//   query: PropTypes.string.isRequired,
// };

// export default ImageGallery;
