const Button = ({ className, type, title, disabled }) => {
  return (
    <button className={className} type={type} disabled={disabled}>
      {title}
    </button>
  );
};

export { Button };
