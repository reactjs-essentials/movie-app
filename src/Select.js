const Select = ({ collection, value, isMultiple, handleOnChange }) => {
  return (
    <>
      <select
        multiple={isMultiple}
        value={value}
        onChange={(e) => {
          debugger;
          handleOnChange([...e.target.selectedOptions].map((o) => o.value));
        }}
      >
        {collection.map((gender) => (
          <option key={gender} value={gender}>
            {gender}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
