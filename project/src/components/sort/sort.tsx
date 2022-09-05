import { MouseEvent, MouseEventHandler, useState } from 'react';
import { SortType, SortTypes } from '../../const';
import { Nbsp } from '../nbsp/nbsp';

type SortFormProps = {
  currentSort: SortType,
  setSort: (newSort: SortType) => void
}

export function SortForm({ currentSort, setSort }: SortFormProps): JSX.Element {
  const [filtersPopup, setFiltersPopup] = useState({ isOpened: false });

  const filterOpenHandler: MouseEventHandler<HTMLSpanElement> = (evt) => {
    setFiltersPopup({ isOpened: true });
  };

  const filterSelectHandler = (evt: MouseEvent, sortTypeId: number) => {
    setFiltersPopup({ isOpened: false });
    const selectedSortType = SortTypes.find((type) => type.id === sortTypeId);
    if (selectedSortType && currentSort.id !== selectedSortType.id) {
      setSort(selectedSortType);
    }
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={filterOpenHandler}>
        <Nbsp />{`${currentSort.text}`}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom${filtersPopup.isOpened ? ' places__options--opened' : ''}`}
      >
        {SortTypes.map((sort) => (
          <li
            onClick={(evt: MouseEvent) => filterSelectHandler(evt, sort.id)}
            className={`places__option${sort.id === currentSort.id ? ' places__option--active' : ''}`}
            tabIndex={0}
            key={`filter-${sort.id}`}
          >
            {sort.text}
          </li>
        ))}
      </ul>
    </form>
  );
}
