import { Offer } from '../../types/types';

type ImageGalleryProps = {
  offer: Offer
}

export function ImageGallery({ offer }: ImageGalleryProps): JSX.Element {
  const { id, images } = offer;
  return (
    <div className="property__gallery">
      {images.map((image) => (
        <div className="property__image-wrapper" key={`${id}-${image}`}>
          <img className="property__image" src={image} alt="Phot studio" />
        </div>
      ))}
    </div>
  );
}
