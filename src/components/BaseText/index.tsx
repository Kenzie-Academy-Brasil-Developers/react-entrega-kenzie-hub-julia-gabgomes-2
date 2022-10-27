import React, { ReactNode } from "react";

export interface IBaseTextProps {
  children: ReactNode;
  className?: string;
  tag: string;
  typo: String;
  color: String;
  onClick?: React.MouseEventHandler<HTMLSpanElement> | undefined;
}

export const BaseText: React.FC<IBaseTextProps> = ({
  children,
  className,
  tag,
}: IBaseTextProps) => {
  return (
    <>
      {tag === "h1" && <h1 className={className}>{children}</h1>}
      {tag === "h2" && <h2 className={className}>{children}</h2>}
      {tag === "h3" && <h3 className={className}>{children}</h3>}
      {tag === "h4" && <h4 className={className}>{children}</h4>}
      {tag === "h5" && <h5 className={className}>{children}</h5>}
      {tag === "h6" && <h6 className={className}>{children}</h6>}
      {tag === "p" && <span className={className}>{children}</span>}
      {tag === "span" && <span className={className}>{children}</span>}
    </>
  );
};
