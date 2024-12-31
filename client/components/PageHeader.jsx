const PageHeader = ({ children }) => {
  return (
    <h1 className="z-0 font-serif text-3xl font-black relative inline after:content-[''] after:block after:w-[105%] after:h-[35%] after:bg-primary after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:-z-10">
      {children}
    </h1>
  );
};

export default PageHeader;
