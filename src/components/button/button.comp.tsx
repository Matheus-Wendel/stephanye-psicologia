interface ButtonProps {
  onClick?: () => void;
  text?: string;
}

const Button = ({ onClick = () => null, text = "Button" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-accent pl-3 pr-3 pt-4 pb-4 md:p-5 rounded h-1/2 md:w-1/2"
    >
      <p className="tracking-wider text-dark">{text}</p>
    </button>
  );
};

export default Button;
