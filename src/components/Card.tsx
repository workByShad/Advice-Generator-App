import { FC, ReactNode } from 'react';
import '../assets/styles/App.css';

interface Props {
  children: ReactNode;
}

const Card: FC<Props> = (props: Props) => {
  return <div className="card">{props.children}</div>;
};

export default Card;
