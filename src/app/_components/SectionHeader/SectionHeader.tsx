import { propsWithChildren } from "@/TYEPS";
import React from "react";

type sectionHeaderProps = propsWithChildren & {
  SectionHeaderClass?: {
    className?: string;
  };
};

function SectionHeader({
  children,
  SectionHeaderClass = { className: "p-4 pb-1 text-xl font-semibold" },
}: sectionHeaderProps) {
  return <h3 {...SectionHeaderClass}>{children}</h3>;
}

export default SectionHeader;
