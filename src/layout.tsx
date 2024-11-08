const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white w-full">
      <div>{children}</div>
    </div>
  );
};

export default Layout;
