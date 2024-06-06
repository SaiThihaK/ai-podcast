import Link from "next/link";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  path: string;
};

const NavItem: FC<Props> = ({ children, path }) => {
  return (
    <Link
      href={path}
      className="flex justify-start px-4 items-center space-x-4 py-2 hover:bg-gradient-to-r from-white/10 to-background/80 hover:border-r-4 border-primary transition-all duration-100 ease-in"
    >
      {children}
    </Link>
  );
};

export default NavItem;
