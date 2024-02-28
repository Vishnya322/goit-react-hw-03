import css from './SearchBox.module.css';

const SearchBox = ({ value, onFilter }) => {
  return (
    <div>
      <p className={css.label}>Select contacts by name</p>
      <input
        className={css.searchForm}
        type="text"
        value={value}
        onChange={e => onFilter(e.target.value)}
        id="searchInput"
        autoComplete="off"
        name="searchInput"
      />
    </div>
  );
};

export default SearchBox;
