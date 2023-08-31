import { FC } from 'react';
import '../assets/styles/App.css';

interface Props {
  title: string;
}

const AdviceTitle: FC<Props> = (props: Props) => {
  return <h1 className="header">{props.title}</h1>;
};

export default AdviceTitle;
