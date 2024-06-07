import LayoutContainer from "@/components/shared/layout-container";
import HomeContainer from "@/page-container/home";
import { NextPage } from "next";

const page: NextPage = () => {
  return (
    <LayoutContainer>
      <HomeContainer />
    </LayoutContainer>
  );
};

export default page;
