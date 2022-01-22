.card {
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: white;
}

import classes from './Card.module.css';

const Card = props => {
  return <div className={classes.card}>{props.children}</div>
};

export default Card;


type CardProps = {
  title: string;
  children: React.ReactNode;
};

export function Card({ title, children }: CardProps) {
  return (
    <section className="cards">
      <h2>{title}</h2>
      {children}
    </section>
  );
}