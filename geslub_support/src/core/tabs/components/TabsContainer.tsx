import React, { FC, ReactNode } from "react";

interface TabsContainerProps {
  children: ReactNode;
}

const TabsContainer: FC<TabsContainerProps> = ({ children }) => {
  return <div className="flex flex-col">{children}</div>;
};

export default TabsContainer;
