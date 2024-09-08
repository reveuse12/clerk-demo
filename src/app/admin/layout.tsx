import React, { Fragment, ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <Fragment>{children}</Fragment>;
};

export default layout;
