// generic button component

const button = ({ type, text, onClick }) => {
  <button type={type} onClick={onClick}>
    {text}
  </button>;
};
