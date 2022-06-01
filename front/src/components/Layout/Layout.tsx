interface Props {
  children?: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <div>Common</div>
      {children}
    </div>
  );
};

export default Layout;
