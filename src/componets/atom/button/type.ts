type ButtonType = "button" | "submit" | "reset";
type ButtonVariant = "primary" | "secondary" | "accent" | "tertiary";
type ButtonVariantType = "solid" | "outline";
interface ButtonPropsTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
 className?:string;
 children?:React.ReactNode;
 style?:React.CSSProperties;
 role?:string;
 ariaLabel?:string;
 arialabelledby?:string;
 ariadescribedby?:string;
 type:ButtonType;
 variant?:ButtonVariant;
 variantType?:ButtonVariantType;

}
export default ButtonPropsTypes