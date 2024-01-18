import clsx from "clsx";

import classes from "./ButtonBase.module.css";

export default function ButtonBase({
  type = "button",
  className,
  children,
  ...rest
}: JSX.IntrinsicElements["button"]) {
  return (
    <button type={type} className={clsx(classes.root, className)} {...rest}>
      {children}
    </button>
  );
}
