interface Props {
  children: string;
  //   color: string;
  color: "primary" | "secondary" | "success" | "warning";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "warning" }: Props) => {
  return (
    <div>
      <button
        type="button"
        className={"btn btn-lg btn-outline-" + color}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
