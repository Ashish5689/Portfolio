import * as React from "react";
import { Label } from "./label";
import { cn } from "@/lib/utils";

const FieldGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} data-slot="field-group" className={cn("flex w-full flex-col gap-7", className)} {...props} />
  ),
);
FieldGroup.displayName = "FieldGroup";

const Field = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} role="group" data-slot="field" className={cn("flex w-full flex-col gap-3", className)} {...props} />
  ),
);
Field.displayName = "Field";

const FieldLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => (
  <Label ref={ref} data-slot="field-label" className={cn("flex w-fit items-center gap-2", className)} {...props} />
));
FieldLabel.displayName = "FieldLabel";

const FieldDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} data-slot="field-description" className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
);
FieldDescription.displayName = "FieldDescription";

const FieldError = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    if (!children) return null;
    return (
      <p ref={ref} role="alert" data-slot="field-error" className={cn("text-sm text-destructive", className)} {...props}>
        {children}
      </p>
    );
  },
);
FieldError.displayName = "FieldError";

export { Field, FieldDescription, FieldError, FieldGroup, FieldLabel };
