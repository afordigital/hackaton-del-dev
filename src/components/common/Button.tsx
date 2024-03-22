type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="p-2 bg-cGreenButton border-2 border-cGreenStroke rounded-md hover:bg-[#49e19b]"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
