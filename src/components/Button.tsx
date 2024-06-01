import cn from "classnames";

interface ButtonProps {
  content: string;
  className: string;
}

const Button = (props: ButtonProps) => {
  const { content, className } = props;
  return (
    <div
      className={`w-[212px] h-[48px] rounded-md shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-[16px] font-medium text-center flex items-center justify-center ${cn(
        className
      )}`}
    >
      {content}
    </div>
  );
};

export default Button;
