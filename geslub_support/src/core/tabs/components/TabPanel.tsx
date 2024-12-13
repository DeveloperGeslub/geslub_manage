import React, { FC, ReactNode } from "react";

interface TabPanelProps {
  isActive: boolean;
  children: ReactNode;
}

const TabPanel: FC<TabPanelProps> = ({ isActive, children }) => {
  return isActive ? <div>{children}</div> : null;
};

export default TabPanel;
