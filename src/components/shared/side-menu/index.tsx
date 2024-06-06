import { FC } from "react";
import Wrapper from "@/components/shared/wrapper";

const SideNavbar: FC = () => {
  return (
    <div className="h-screen w-full">
      <Wrapper className="flex flex-col justify-start">
        <div>Logo</div>
        <div>side menu</div>
      </Wrapper>
    </div>
  );
};

export default SideNavbar;
