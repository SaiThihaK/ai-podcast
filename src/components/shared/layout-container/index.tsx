import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { FC, ReactNode } from "react";
import Wrapper from "@/components/shared/wrapper";
import PopularPodcast from "@/components/shared/layout-container/popular-podcast";
import SideNavbar from "@/components/shared/layout-container/side-menu";

type Props = {
  children: ReactNode;
};

const LayoutContainer: FC<Props> = ({ children }) => {
  return (
    <ResizablePanelGroup direction="horizontal" className="container">
      <ResizablePanel defaultSize={20} minSize={10}>
        <SideNavbar />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={60} minSize={55}>
        <div className="w-full h-screen bg-black">
          <Wrapper>{children}</Wrapper>
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
