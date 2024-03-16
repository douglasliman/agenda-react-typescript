import { FC, MouseEvent, ReactNode } from "react";
import S from "./style.module.css";
import { TypeButton, TypeButtonEnum } from "./Button.d";
import { Link } from "react-router-dom";
// import { PATHS } from "../../routes/paths";


interface ButtonProps {
  children: ReactNode;
  type?: TypeButton;
  path?: string;
  onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const { children, disabled, type, onClick, path = "" } = props;





  if (type === TypeButtonEnum.LINK) {
    return (
      <>
        <Link to={path} className={S.buttonLink} onClick={() => onClick && onClick()} >
          {children}
        </Link>

      </>
    );
  }

  return (
    <>
      <button className={S.button} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </>
  );
};

export { Button };
