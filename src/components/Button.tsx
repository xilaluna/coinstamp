type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
