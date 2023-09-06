import { FC } from 'react';

interface Props {
  icon: string;
}

const Button: FC<Props> = (props: Props) => {
  return (
    <button className="button">
      <img src={props.icon} />
    </button>
  );
};

export default Button;
