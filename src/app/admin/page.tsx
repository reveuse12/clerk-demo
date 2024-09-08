"use client";
import { useClerk } from "@clerk/nextjs";
import React from "react";

const Page = () => {
  const { user } = useClerk();
  return <div>Hello this is admin dashboard {user?.firstName}</div>;
};

export default Page;
