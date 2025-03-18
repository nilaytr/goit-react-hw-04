import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { IoSearch } from "react-icons/io5";
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
        setSearch("");
    }

    return (
        <header className={css.searchBar}>
            <Toaster position="bottom-center" reverseOrder={false}/>
            <form onSubmit={handleSubmit}>
                <div>
                  <IoSearch className={css.icon} size={28} onClick={handleSubmit} />
                   <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                   /> 
                </div>
            </form>
        </header>
    );
};

export default SearchBar

