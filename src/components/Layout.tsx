type LayoutProps = {
  children: React.ReactNode;
  heading: string;
  description: string;
  className?: string;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  heading,
  description,
  className,
}) => {
  return (
    <main className={`${className} page-width space-y-10 py-20`}>
      <section className="flex flex-col items-center justify-center space-y-5 ">
        <h1 className="text-4xl">{heading}</h1>
        <p>{description}</p>
      </section>
      {children}
    </main>
  );
};

export default Layout;
