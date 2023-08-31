import Card from './components/card';
import AdviceTitle from './components/AdviceTitle';
import AdviceText from './components/AdviceText';
import Button from './components/button';
import desktopPattern from './assets/images/pattern-divider-desktop.svg';
import './assets/styles/App.css';

function App() {
  return (
    <>
      <Card>
        <AdviceTitle title="header" />
        <AdviceText text="advice" />
        <img src={desktopPattern} />
        <Button title="Button" />
      </Card>
    </>
  );
}

export default App;
