import { CompassIcon, LucideHome, MicIcon, UserRound } from "lucide-react";
import { FC } from "react";
import NavItem from "./nav-item";

const SideMenu: FC = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <NavItem path="/">
        <LucideHome />
        <span>Home</span>
      </NavItem>
      <NavItem path="/discover">
        <CompassIcon />
        <span>Discover</span>
      </NavItem>
      <NavItem path="/create-podcast">
        <MicIcon />
        <span>Create Podcast</span>
      </NavItem>
      <NavItem path="/profile">
        <UserRound />
        <span>Profile</span>
      </NavItem>
    </div>
  );
};

export default SideMenu;
