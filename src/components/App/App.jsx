import { useState, useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Searchbar } from '../Searchbar/Searchbar';
import { searchImages } from 'Api/Api';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { Message } from '../Message/Message';
import { ApplicationBox } from './App.styled';

export const App = () => {
  const [totalImages, setTotalImages] = useState(0);
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState('1');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    const getImages = async (searchQuery, page) => {
      setStatus('pending');
      try {
        const responseDataImages = await searchImages(searchQuery, page);
        setImages(state => [...state, ...responseDataImages.hits]);
        setTotalImages(responseDataImages.totalHits);
        setStatus('resolved');
      } catch (error) {
        setError(error);
        setStatus('rejected');
        console.error(error.message);
      }
    };

    getImages(searchQuery, page);
  }, [page, searchQuery]);

  const getSearchQuery = query => {
    if (query === searchQuery) {
      return;
    }
    setSearchQuery(query);
    setPage(1);
    setImages([]);
  };

  const loadMoreImages = () => {
    setPage(page => page + 1);
  };

  const totalPages = Math.ceil(totalImages / 12);
  return (
    <ApplicationBox>
      <Searchbar onSubmit={getSearchQuery} />
      {status !== 'idle' && totalImages > 0 && (
        <ImageGallery imagesData={images} />
      )}
      {status === 'rejected' && <Message>{error.message}</Message>}
      {status === 'resolved' && totalImages === 0 && (
        <Message>
          Your search "{searchQuery}" did not match any listings. Change the
          request field and try again.
        </Message>
      )}
      {status === 'resolved' && totalPages > page && (
        <Button loadMore={loadMoreImages}>Load more</Button>
      )}
      {status === 'pending' && (
        <ThreeDots
          color="#3f51b5"
          wrapperStyle={{ justifyContent: 'center' }}
        />
      )}
    </ApplicationBox>
  );
};
