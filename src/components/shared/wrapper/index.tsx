import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const Wrapper: FC<Props> = ({ children, className }) => {
  return (
    <div className={cn("py-2 md:py-6 px-2 md:px-6 h-full", className)}>
      {children}
    </div>
  );
};

export default Wrapper;
