import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
    return (
        <div className={css.galleryDiv}>
            {images.map((image) => (
                <ImageCard
                    key={image.id}
                    image={image}
                    onClick={() => onImageClick(image)}
                />
            ))}
        </div>
    );
};

export default ImageGallery;
