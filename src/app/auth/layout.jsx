import Navbar from "@/components/Layout/Navbar";

const authLayout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <div className="h-full w-full">{children}</div>
    </>
  );
};

export default authLayout;
