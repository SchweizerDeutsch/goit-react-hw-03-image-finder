import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import {
  GalleryContainer,
  GalleryList,
  LoadMoreContainer,
} from './ImageGallery.styled';

class ImageGallery extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      this.props.resetImages();
    }
  }

  render() {
    const {
      images,
      isLoading,
      showModal,
      modalImage,
      onOpenModal,
      onCloseModal,
      handleLoadMore,
      loadMore,
    } = this.props;

    return (
      <GalleryContainer>
        <GalleryList>
          {images.map((image, index) => (
            <ImageGalleryItem
              key={`${image.id}_${index}`}
              image={image}
              onClick={() => onOpenModal(image.largeImageURL)}
            />
          ))}
        </GalleryList>

        {isLoading && <Loader />}

        {images.length > 0 && !isLoading && loadMore && (
          <LoadMoreContainer>
            <Button onClick={handleLoadMore} />
          </LoadMoreContainer>
        )}

        {images.length > 0 && !isLoading && (
          <LoadMoreContainer>
            <Button onClick={this.props.fetchImages} />
          </LoadMoreContainer>
        )}

        {showModal && <Modal imageURL={modalImage} onClose={onCloseModal} />}
      </GalleryContainer>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  showModal: PropTypes.bool.isRequired,
  modalImage: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  fetchImages: PropTypes.func.isRequired,
  resetImages: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default ImageGallery;

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// import Button from '../Button/Button';
// import Loader from '../Loader/Loader';
// import Modal from '../Modal/Modal';
// import { GalleryContainer, GalleryList } from './ImageGallery.styled';

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
//         <GalleryList className="gallery">
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
//           <Button onClick={handleLoadMore} />
//         )}

//         {images.length > 0 && !isLoading && (
//           <Button onClick={this.props.fetchImages} />
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
