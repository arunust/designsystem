import { JSX } from "react";

interface TypographyPropsTypes {
 text:string;
 tag:keyof JSX.IntrinsicElements;
 className?:string;
 children?:React.ReactNode;
 style?:React.CSSProperties;
 role?:string;
 ariaLabel?:string;
 arialabelledby?:string;
 ariadescribedby?:string;
}

export default TypographyPropsTypes