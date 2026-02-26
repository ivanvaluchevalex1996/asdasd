import { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './theme';

export type TButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'danger';
  fullWidth?: boolean;
  centered?: boolean;
  disabled?: boolean;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

export const Button = ({
  children,
  variant = 'primary',
  fullWidth = false,
  centered = false,
  disabled = false,
  className,
  ...props
}: TButtonProps) => {
  return (
    <StyledButton
      type="button"
      $variant={variant}
      $fullWidth={fullWidth}
      $centered={centered}
      disabled={disabled}
      className={className}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
