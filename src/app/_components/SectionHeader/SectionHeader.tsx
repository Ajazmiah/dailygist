import { propsWithChildren } from "@/TYEPS";
import React from "react";

type sectionHeaderProps = propsWithChildren & {
  SectionHeaderClass: {
    className?: string;
  };
};

function SectionHeader({ children ="p-4 pb-1 text-xl font-semibold", SectionHeaderClass }: sectionHeaderProps) {
  return <h3 {...SectionHeaderClass}>{children}</h3>;
}

export default SectionHeader;
