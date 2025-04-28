// components/Gallery/Gallery.tsx
import { Thumbnail } from '../../types.ts';
import '../../assets/styles/index.css';

type GalleryProps = {
  currentImageIndex: number;
  thumbnails: Thumbnail[];
  onThumbnailClick: (id: number) => void;
  onMainImageClick: () => void;
  onNextClick: () => void;
  onPrevClick: () => void;
};

const Gallery = ({
  currentImageIndex,
  thumbnails,
  onThumbnailClick,
  onMainImageClick,
  onNextClick,
  onPrevClick
}: GalleryProps) => {
  return (
    <article className="gallery">
      <div 
        className="gallery__image-container"
        style={{ backgroundImage: `url(./images/image-product-${currentImageIndex}.jpg)` }}
        onClick={onMainImageClick}
      >
        <img 
          className="gallery__previus" 
          src="./images/icon-previous.svg" 
          alt="previous"
          onClick={(e) => {
            e.stopPropagation();
            onPrevClick();
          }}
        />
        <img 
          className="gallery__next" 
          src="./images/icon-next.svg" 
          alt="next"
          onClick={(e) => {
            e.stopPropagation();
            onNextClick();
          }}
        />
      </div>
      
      <div className="gallery__thumnails">
        {thumbnails.map(thumbnail => (
          <img
            key={thumbnail.id}
            id={thumbnail.id.toString()}
            className={`gallery__thumnail ${currentImageIndex === thumbnail.id ? 'active' : ''}`}
            src={thumbnail.src}
            alt={thumbnail.alt}
            onClick={() => onThumbnailClick(thumbnail.id)}
          />
        ))}
      </div>
    </article>
  );
};

export default Gallery;