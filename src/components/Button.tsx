type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({ children, type, ...props }) => {
  return (
    <button
      {...props}
      type={type}
      className="rounded-md bg-indigo-400 px-5 py-2 text-zinc-900 hover:bg-indigo-600"
    >
      {children}
    </button>
  );
};

export default Button;
