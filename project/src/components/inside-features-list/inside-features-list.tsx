import { getNewId } from '../../mocks/offers';

type InsideFeaturesListProps = {
  insideFeatures: string[],
};

export function InsideFeaturesList({ insideFeatures }: InsideFeaturesListProps): JSX.Element {
  return (
    <ul className="property__inside-list">
      {insideFeatures.map((item) => (
        <li className="property__inside-item" key={getNewId()}>
          {item}
        </li>
      ))}
    </ul>
  );
}
