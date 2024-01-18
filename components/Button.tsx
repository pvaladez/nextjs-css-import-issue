import clsx from "clsx";

import ButtonBase from "./ButtonBase";
import classes from "./Button.module.css";

export default function Button({
  className,
  children,
  ...rest
}: JSX.IntrinsicElements["button"]) {
  return (
    <ButtonBase className={clsx(classes.root, className, "button")} {...rest}>
      {children}
    </ButtonBase>
  );
}
