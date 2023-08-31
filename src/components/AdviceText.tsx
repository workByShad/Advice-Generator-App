import { FC } from 'react';
import '../assets/styles/App.css';

interface Props {
  text: string;
}

const AdviceText: FC<Props> = (props: Props) => {
  return <p className="text">{props.text}</p>;
};

export default AdviceText;
