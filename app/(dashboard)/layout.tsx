const DastboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[100] bg-gray-100">
        <div>Hello Sidebar</div>
      </div>
      <main className="md:pl-72">{children}</main>
    </div>
  );
};
export default DastboardLayout;
