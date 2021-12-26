import classes from "./Card.module.css";

const Card = ({ size, children, className }) => {
  return <div className={`${classes.card} ${className}`}>{children}</div>;
};

export default Card;
