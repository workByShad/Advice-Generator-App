import { FC } from 'react';

interface Props {
  title: string;
}

const Button: FC<Props> = (props: Props) => {
  return <button>{props.title}</button>;
};

export default Button;
