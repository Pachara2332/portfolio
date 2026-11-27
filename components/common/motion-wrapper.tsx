import React from "react";

type WrapperProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "children">;

export function FadeUp({ children, className, delay: _delay, ...props }: WrapperProps) {
  void _delay;
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

export function Stagger({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}
