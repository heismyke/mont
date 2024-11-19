const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-50 text-black w-full">
      <div>{children}</div>
    </div>
  );
};

export default Layout;
