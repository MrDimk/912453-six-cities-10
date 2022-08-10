import { getNewId, Offer } from '../../mocks/offers';

type ImageGalleryProps = {
  offer: Offer,
}

export function ImageGallery({ offer }: ImageGalleryProps): JSX.Element {
  const { images } = offer;
  return (
    <div className="property__gallery">
      {images.map((image) => (
        <div className="property__image-wrapper" key={`img-${getNewId()}`}>
          <img className="property__image" src={image} alt="Phot studio" />
        </div>
      ))}
    </div>
  );
}
