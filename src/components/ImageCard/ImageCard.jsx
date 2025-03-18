import css from './ImageCard.module.css';

const ImageCard = ({ image, onClick }) => {
    return (
        <div className={css.imageDiv} onClick={onClick} >
            <img src={image.urls.small} alt={image.description} className={css.image} />
        </div>
    );
};

export default ImageCard