import { FC } from 'react';
import '../assets/styles/App.css';

interface IProps {
  title: string;
}

const AdviceTitle: FC<IProps> = (props: IProps) => {
  return <h1 className="header">{props.title}</h1>;
};

export default AdviceTitle;
