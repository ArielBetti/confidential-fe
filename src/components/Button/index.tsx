import { forwardRef } from "react";

// radix: components
import { Slot } from "@radix-ui/react-slot";

// types
import type { TButton } from "./types";

// ::
const Button = forwardRef<HTMLButtonElement, TButton>(
  ({ children, asChild = false, className, ...rest }, ref) => {
    const Component = asChild ? Slot : "button";
    return (
      <Component
        {...rest}
        ref={ref}
        className={`${className} bg-gradient-to-r from-cyan-500 to-blue-500 flex cursor-pointer items-center justify-center gap-1 rounded-md p-2 text-white shadow-md transition-colors`}
      >
        {children}
      </Component>
    );
  }
);

Button.displayName = 'Button';

export default Button;
