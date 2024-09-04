const Spinner = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="size-16 animate-spin text-secondary-foreground"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 12a9 9 0 1 1-6.219-8.56"
        />
      </svg>
    </div>
  );
};

export default Spinner;
