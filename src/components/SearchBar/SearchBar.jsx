import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
    const [search, setSearch] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.trim() === "") {
            toast.error("Please enter a search term.");
            return;
        }
        onSubmit(search);
    }

    return (
        <header>
            <Toaster position="top-center" reverseOrder={false}/>
            <form onSubmit={handleSubmit}>
                <input
                    class="input"
                    type="text"
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </header>
    );
};

export default SearchBar

