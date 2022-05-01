interface CardProps {
  title: string;
  children: React.ReactNode;
}

// add styles to the card component
const sectionStyles = {
  border: "1px solid black",
  padding: "1rem",
  margin: "1rem",
  width: "30rem",
  height: "30rem",
  backgroundColor: "lightblue",
};

const Card = ({ title, children }: CardProps) => {
  return (
    <section className="sectionStyles">
      <h2>{title}</h2>
      {children}
    </section>
  );
};
