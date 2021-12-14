const button = ({ onClick, text, type }) => {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
};
