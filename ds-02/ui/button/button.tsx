import { ButtonHTMLAttributes, ReactNode, Ref, forwardRef } from "react";

export type ButtonSize = "small" | "medium" | "large";

export type PrimaryButtonSkin = "primary" | "primary_success" | "primary_danger" | "primary_warning";
export type SecondaryButtonSkin = "secondary" | "secondary_success" | "secondary_danger" | "secondary_warning";
export type TerciaryButtonSkin = "terciary" | "terciary_success" | "terciary_danger" | "terciary_warning";
export type ButtonSkin = PrimaryButtonSkin | SecondaryButtonSkin | TerciaryButtonSkin | "cancel";

export type ButtonProps = {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  skin?: ButtonSkin;
  size?: ButtonSize;
  width?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const SIZE_STYLE = {
  small: "j-h-[30px] j-p-[5px_16px] j-text-[14px] j-leading-[20px] [&_svg]:j-w-[20px] [&_svg]:j-h-[20px]",
  medium: "j-h-[34px] j-p-[7px_20px] j-text-[14px] j-leading-[20px] [&_svg]:j-w-[20px] [&_svg]:j-h-[20px]",
  large: "j-h-[42px] j-p-[9px_24px] j-text-[16px] j-leading-[24px] [&_svg]:j-w-[24px] [&_svg]:j-h-[24px]",
};

const UI_PRIMARY_STYLE = "j-text-white disabled:j-bg-neutral-100";
const UI_SECONDARY_STYLE = "j-bg-transparent j-border-solid j-border-[1px] disabled:j-border-neutral-200 disabled:j-text-neutral-200";
const UI_TERCIARY_STYLE = "j-bg-transparent disabled:j-text-neutral-200";

const SKIN_STYLE = {
  primary: `${UI_PRIMARY_STYLE} !j-bg-primary-500 [&:not(:disabled)]:hover:!j-bg-primary-600`,
  primary_danger: `${UI_PRIMARY_STYLE} !j-bg-semantic-error [&:not(:disabled)]:hover:!j-bg-semantic-error-dark`,
  primary_success: `${UI_PRIMARY_STYLE} !j-bg-semantic-success [&:not(:disabled)]:hover:!j-bg-semantic-success-dark`,
  primary_warning: `${UI_PRIMARY_STYLE} !j-bg-semantic-warning-dark [&:not(:disabled)]:hover:!j-bg-semantic-warning`,

  secondary: `${UI_SECONDARY_STYLE} j-text-primary-500 j-border-primary-500 [&:not(:disabled)]:hover:j-bg-primary-100`,
  secondary_danger: `${UI_SECONDARY_STYLE} j-text-semantic-error j-border-semantic-error [&:not(:disabled)]:hover:j-bg-semantic-error-ligth`,
  secondary_success: `${UI_SECONDARY_STYLE} j-text-semantic-success j-border-semantic-success [&:not(:disabled)]:hover:j-bg-semantic-success-ligth`,
  secondary_warning: `${UI_SECONDARY_STYLE} j-text-semantic-warning j-border-semantic-warning [&:not(:disabled)]:hover:j-bg-semantic-warning-ligth`,

  terciary: `${UI_TERCIARY_STYLE} j-text-primary-500 [&:not(:disabled)]:hover:j-bg-primary-100`,
  terciary_danger: `${UI_TERCIARY_STYLE} j-text-semantic-error [&:not(:disabled)]:hover:j-bg-semantic-error-ligth`,
  terciary_success: `${UI_TERCIARY_STYLE} j-text-semantic-success [&:not(:disabled)]:hover:j-bg-semantic-success-ligth`,
  terciary_warning: `${UI_TERCIARY_STYLE} j-text-semantic-warning [&:not(:disabled)]:hover:j-bg-semantic-warning-ligth`,

  cancel: "!j-bg-grey-bg j-text-text-terciary j-border-[1px] border-solid border-transparent [&:not(:disabled)]:hover:!j-bg-white [&:not(:disabled)]:hover:j-border-text-terciary",
};

export const Button = forwardRef(({
  children,
  size = "medium",
  skin = "primary",
  leftIcon = null,
  rightIcon = null,
  className,
  width,
  ...rest
}: ButtonProps, ref: Ref<HTMLButtonElement>) => {
  return (
    <button
      type="button"
      {...rest}
      ref={ref}
      className={`
        j-font-primary j-font-bold j-flex j-items-center j-justify-center j-gap-x-[8px]
        j-rounded-full j-disabled:text-gray-34 j-cursor-pointer j-w-fit
        disabled:j-cursor-not-allowed j-transition-all j-duration-300
        ${SIZE_STYLE[size]}
        ${SKIN_STYLE[skin]}
      `}
      style={{ width, ...rest.style }}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
});

