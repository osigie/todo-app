type Props = {
  color: string;
  text: string;
};

const Button = ({ text, color }: Props) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

export default Button;
