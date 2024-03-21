type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="p-2 bg-cGreenButton border-2 border-cGreenStroke rounded-md"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
