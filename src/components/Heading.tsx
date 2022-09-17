interface Props {
  title: string;
  subtitle: string;
}

const Heading: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-5">
      <h1 className="heading-color text-6xl font-bold">{title}</h1>
      <p className="text-center text-lg	">{subtitle}</p>
    </div>
  );
};

export default Heading;
