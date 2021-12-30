function Select(props: {label: string, id: string, placeholder: string}) {
  const { label, id, placeholder } = props;
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select id={id}>
        <option value='' disabled selected>{placeholder}</option>
        <option value={0}>1</option>
      </select>
    </div>

  );
}

export default Select;