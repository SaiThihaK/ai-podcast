import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { FC, ReactNode } from "react";
import PopularPodcast from "@/components/shared/popular-podcast";
import SideNavbar from "../side-menu";
import Wrapper from "../wrapper";

type Props = {
  children: ReactNode;
};

const LayoutContainer: FC<Props> = ({ children }) => {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="xl:container overflow-hidden"
    >
      <ResizablePanel defaultSize={20} minSize={10}>
        <SideNavbar />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={60} minSize={55}>
        <div className="w-full h-full bg-[#101114]">
          <Wrapper> {children}</Wrapper>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={20} minSize={10}>
        <PopularPodcast />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default LayoutContainer;
