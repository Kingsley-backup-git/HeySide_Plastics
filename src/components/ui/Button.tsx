type BtnProps = {
    children : React.ReactNode
  className: string;
  type: "submit" | "reset" | "button" | undefined;
};
export default function Button({
  children,
  ...props
}:BtnProps) {
  return <button {...props}>{children}</button>;
}
