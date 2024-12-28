import { Button, CircularProgress } from "@mui/material";
interface PropTypes {
  handleClick: (e: any) => any;
  label: string;
  disabled?: boolean;
  prependIcon?: JSX.Element;
  appendIcon?: JSX.Element;
  size?: "small" | "medium" | "large";
  variant: "outlined" | "contained";
  loading?: boolean;
  className?: any;
}

const CustomButton = ({
  label,
  disabled = false,
  prependIcon,
  appendIcon,
  size = "medium",
  variant,
  handleClick,
  loading = false,
  className,
}: PropTypes) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        className={className}
        onClick={handleClick}
        variant={variant}
        disabled={disabled}
        endIcon={appendIcon}
        startIcon={loading ? <CircularProgress size={20} /> : prependIcon}
        size={size}
      >
        {label}
      </Button>
    </div>
  );
};

export default CustomButton;
