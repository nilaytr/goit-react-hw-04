import { useState } from 'react'
import './App.css'
import axios from 'axios';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import ImageModal from './components/ImageModal/ImageModal.jsx';
import Loader from './components/Loader/Loader.jsx';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';

const App = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const ACCESS_KEY = "pYfdAjsViVzuzzfqYReKuXCAmBMzhZxaYwShClhJNik";

  const fetchImages = async (searchQuery, newPage = 1) => {
    if (!searchQuery.trim()) return;
    setLoading(true);
    setError(null);

    const params = new URLSearchParams({
      query: searchQuery,
      page: newPage,
      per_page: 12,
      client_id: ACCESS_KEY,
    });

    try {
      const url = `https://api.unsplash.com/search/photos?${params}`;
      const response = await axios.get(url);

      if (newPage === 1) {
        setResults(response.data.results);
      } else {
        setResults((prevResults) => [...prevResults, ...response.data.results]);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
      setError(error.response?.data?.message || "Oops! Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (newQuery) => {
    if (!newQuery.trim()) return;
    setQuery(newQuery);
    setPage(1);
    fetchImages(newQuery, 1);
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchImages(query, nextPage);
  };

  const openModal = (image) => {
    if (showModal) return;
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setShowModal(false);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={results} onImageClick={openModal} />
      {loading && <Loader />}
      {results.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default App
