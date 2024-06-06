import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Wrapper: FC<Props> = ({ children }) => {
  return <div className="py-2 md:py-6">{children}</div>;
};

export default Wrapper;
