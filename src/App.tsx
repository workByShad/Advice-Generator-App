import Card from './components/Card';
import AdviceTitle from './components/AdviceTitle';
import AdviceText from './components/AdviceText';
import Button from './components/Button';
import desktopPattern from './assets/images/pattern-divider-desktop.svg';
import diceIcon from './assets/images/icon-dice.svg';

import './assets/styles/App.css';

function App() {
  const title = `ADVICE #${117}`;
  const placeholder = `"It is easy to sit up and take notice, what's difficult is getting up and taking action."`;

  return (
    <>
      <Card>
        <AdviceTitle title={title} />
        <AdviceText text={placeholder} />
        <img src={desktopPattern} />
        <Button icon={diceIcon} />
      </Card>
    </>
  );
}

export default App;
