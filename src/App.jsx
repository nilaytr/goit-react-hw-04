import { useState } from 'react'
import './App.css'
import axios from 'axios';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';
import ImageCard from './components/ImageCard/ImageCard.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import ImageModal from './components/ImageModal/ImageModal.jsx';
import Loader from './components/Loader/Loader.jsx';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const ACCESS_KEY = "pYfdAjsViVzuzzfqYReKuXCAmBMzhZxaYwShClhJNik";

  const fetchImages = async (searchQuery, newPage = 1) => {
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
        setImages(response.data.results);
      } else {
        setResults((prevResults) => [...prevResults, ...response.data.results]);
      }
    } catch (error) {
      setError("Oops! Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }


  }

   return (
    <>
      
    </>
  )
}

export default App
