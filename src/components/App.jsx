import React, { Component } from 'react';
import '../styles.css';
import Searchbar from '../components/Searchbar/Searchbar';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import fetchImages from 'utils/api';

class App extends Component {
  state = {
    query: '',
    showModal: false,
    modalImage: '',
    images: [],
    currentPage: 1,
    isLoading: false,
    loadMore: true,
  };

  handleFormSubmit = query => {
    this.setState({ query, images: [], currentPage: 1 }, () =>
      this.fetchImages()
    );
  };

  openModal = imageURL => {
    this.setState({ showModal: true, modalImage: imageURL });
  };

  closeModal = () => {
    this.setState({ showModal: false, modalImage: '' });
  };

  handleLoadMore = () => {
    this.fetchImages();
  };

  fetchImages = () => {
    const { query, currentPage } = this.state;

    this.setState({ isLoading: true });

    fetchImages(query, currentPage)
      .then(newImages => {
        this.setState(prevState => ({
          images: [...prevState.images, ...newImages],
          currentPage: prevState.currentPage + 1,
          isLoading: false,
          loadMore: prevState.currentPage < Math.ceil(newImages.totalHits / 12),
        }));
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        this.setState({ isLoading: false });
      });
  };

  resetImages = () => {
    this.setState({ images: [], currentPage: 1 }, () => this.fetchImages());
  };

  render() {
    const { query, showModal, modalImage, images, isLoading, loadMore } =
      this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          query={query}
          showModal={showModal}
          modalImage={modalImage}
          images={images}
          isLoading={isLoading}
          onOpenModal={this.openModal}
          onCloseModal={this.closeModal}
          fetchImages={this.fetchImages}
          resetImages={this.resetImages}
          loadMore={loadMore}
        />
      </div>
    );
  }
}

export default App;
