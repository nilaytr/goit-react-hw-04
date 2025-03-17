import css from './ImageCard.module.css';

const ImageCard = ({ image, alt, onClick }) => {
    return (
        <div>
            <img className={css.image} src={image} alt={alt} onClick={onClick} />
        </div>
    );
};

export default ImageCard