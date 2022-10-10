type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="rounded-md bg-indigo-400 px-5 py-2 text-zinc-900 hover:bg-indigo-600"
    >
      {children}
    </button>
  );
};

export default Button;
