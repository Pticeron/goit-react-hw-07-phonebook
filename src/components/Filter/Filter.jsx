import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  

  const handleChangeFilter = (event) => {
    const query = event.target.value;
    dispatch(setFilter(query));
  };


  return (
    <div>
      <label className={css.filterLabel}>Find contacts by Name </label>
      <input
        className={css.filterName}
        type="text"
        name="filter"
        placeholder="Enter filter"
        onChange={handleChangeFilter}
      />
    </div>
  );
};

