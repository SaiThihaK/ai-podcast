import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Wrapper: FC<Props> = ({ children }) => {
  return <div className="py-2 md:py-6 px-2 md:px-6 h-full">{children}</div>;
};

export default Wrapper;
