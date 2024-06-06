import { Button } from "@/components/ui/button";
import { FC } from "react";
import SideMenu from "./side-menu";

const SideNavbar: FC = () => {
  return (
    <div className="w-full h-screen overflow-y-scroll no-scrollbar py-6 flex flex-col justify-between">
      <div className="flex flex-col justify-start gap-y-6">
        <h1 className="text-4xl px-4">Podcastr</h1>
        <SideMenu />
      </div>
      <div className="w-full px-4">
        <Button className="w-full">Sign Up</Button>
      </div>
    </div>
  );
};

export default SideNavbar;
