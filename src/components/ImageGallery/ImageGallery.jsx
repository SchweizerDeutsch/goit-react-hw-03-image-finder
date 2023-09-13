import React, { Component } from 'react';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';

class ImageGallery extends Component {
  state = {
    images: [],
    currentPage: 1,
    isLoading: false,
    showModal: false,
    modalImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ images: [], currentPage: 1 }, () => this.fetchImages());
    }
  }

  fetchImages = () => {
    const { query } = this.props;
    const { currentPage } = this.state;
    const apiKey = '38911992-4282f3ea184d2afaa0285965b';

    this.setState({ isLoading: true });

    fetch(
      `https://pixabay.com/api/?q=${query}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          currentPage: prevState.currentPage + 1,
          isLoading: false,
        }));
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        this.setState({ isLoading: false });
      });
  };

  openModal = imageURL => {
    this.setState({ showModal: true, modalImage: imageURL });
  };

  closeModal = () => {
    this.setState({ showModal: false, modalImage: '' });
  };

  render() {
    const { images, isLoading, showModal, modalImage } = this.state;

    return (
      <div>
        <ul className="gallery">
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              image={image}
              onClick={() => this.openModal(image.largeImageURL)}
            />
          ))}
        </ul>

        {isLoading && <Loader />}

        {images.length > 0 && !isLoading && (
          <Button onClick={this.fetchImages} />
        )}

        {showModal && <Modal imageURL={modalImage} onClose={this.closeModal} />}
      </div>
    );
  }
}

export default ImageGallery;
