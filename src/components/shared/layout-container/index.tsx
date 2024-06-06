import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { FC, ReactNode } from "react";
import PopularPodcast from "@/components/shared/popular-podcast";
import SideNavbar from "../side-menu";

type Props = {
  children: ReactNode;
};

const LayoutContainer: FC<Props> = ({ children }) => {
  return (
    <ResizablePanelGroup direction="horizontal" className="overflow-hidden">
      <ResizablePanel defaultSize={20} minSize={15}>
        <SideNavbar />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={60} minSize={55}>
        {children}
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={20} minSize={15}>
        <PopularPodcast />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default LayoutContainer;
