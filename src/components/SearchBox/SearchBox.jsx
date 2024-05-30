import css from "./SearchBox.module.css";
import { useId } from "react";

const SearchBox = ({ value, onFilter }) => {
  const finedId = useId();

  const handleChange = (event) => {
    onFilter(event.target.value);
  };
  return (
    <div className={css.searchBox_container}>
      <label htmlFor={finedId}>Find contacts by name</label>
      <input
        className={css.filter_input}
        id={finedId}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
export default SearchBox;
