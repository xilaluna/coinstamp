const Heading = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-5">
      <h1 className="heading-color text-6xl font-bold">{title}</h1>
      <p className="text-center">{subtitle}</p>
    </div>
  );
};

export default Heading;
