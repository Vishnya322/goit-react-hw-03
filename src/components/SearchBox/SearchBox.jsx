import css from './SearchBox.module.css';

const SearchBox = ({ value, onFilter }) => {
  // Ваш код форми тут
  return (
    <div>
      <p className={css.label}>Fined contacts by name</p>
      <input
        className={css.searchForm}
        type="text"
        value={value}
        onChange={e => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
