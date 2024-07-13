import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

const DastboardPage = () => {
  return (
    <div>
      <p>Dashboard page (Protected)</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default DastboardPage;
