// components/ModalGallery/ModalGallery.tsx
import { Thumbnail } from '../../types.ts';
import '../../assets/styles/index.css';

type ModalGalleryProps = {
  currentImageIndex: number;
  thumbnails: Thumbnail[];
  onClose: () => void;
  onThumbnailClick: (id: number) => void;
  onNextClick: () => void;
  onPrevClick: () => void;
};

const ModalGallery = ({
  currentImageIndex,
  thumbnails,
  onClose,
  onThumbnailClick,
  onNextClick,
  onPrevClick
}: ModalGalleryProps) => {
  return (
    <div className="modal-gallery__background">
      <article className="modal-gallery">
        <div className="modal-gallery__close-container">
          <img 
            className="modal-gallery__close" 
            src="./images/icon-close.svg" 
            alt="close"
            onClick={onClose}
          />
        </div>
        
        <div 
          className="modal-gallery__image-container"
          style={{ backgroundImage: `url(./images/image-product-${currentImageIndex}.jpg)` }}
        >
          <img 
            className="modal-gallery__previus" 
            src="./images/icon-previous.svg" 
            alt="previous"
            onClick={onPrevClick}
          />
          <img 
            className="modal-gallery__next" 
            src="./images/icon-next.svg" 
            alt="next"
            onClick={onNextClick}
          />
        </div>
        
        <div className="modal-gallery__thumnails">
          {thumbnails.map(thumbnail => (
            <img
              key={`m${thumbnail.id}`}
              id={`m${thumbnail.id}`}
              className={`modal-gallery__thumnail ${currentImageIndex === thumbnail.id ? 'active' : ''}`}
              src={thumbnail.src}
              alt={thumbnail.alt}
              onClick={() => onThumbnailClick(thumbnail.id)}
            />
          ))}
        </div>
      </article>
    </div>
  );
};

export default ModalGallery;