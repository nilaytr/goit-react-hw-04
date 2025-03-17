import ClipLoader from "react-spinners/ClipLoader";
import css from './Loader.module.css';

const Loader = () => {
    return (
        <div>
            <ClipLoader color="#36D7B7" aria-label="Loading Spinner" />
        </div>
    );
};

export default Loader