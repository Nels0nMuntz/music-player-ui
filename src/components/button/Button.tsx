import React from "react";
import { cn } from "@/lib/utils";
import { Button as UIButton } from "@/ui/button";
import { buttonVariants } from "@/ui/buttonVariants";

interface ButtonProps
  extends React.PropsWithChildren,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "lg" | "default" | "icon" | null;
  asChild?: boolean;
  className?: string;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = React.forwardRef<React.ElementRef<"button">, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild,
      leftIcon,
      rightIcon,
      children,
      onClick,
      ...props
    },
    ref
  ) => (
    <UIButton
      ref={ref}
      data-slot="button"
      asChild={asChild}
      className={cn(buttonVariants({ variant, size, className }))}
      onClick={onClick}
      {...props}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </UIButton>
  )
);

Button.displayName = "Button";

export { Button };
