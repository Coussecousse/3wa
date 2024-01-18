import './App.css';

import Scenario from './containers/Scenario/Scenario';
import HtmlBox from './containers/HtmlBox/HtmlBox';
import CssBox from './containers/CssBox/CssBox';
import OutputBox from './containers/OutputBox/OutputBox';

function App() {
  return (
    <div className="App">
      <h1>Coder avec la 3WA</h1>
      <Scenario></Scenario>
      <section className="game">
        <HtmlBox></HtmlBox>
        <CssBox></CssBox>
        <OutputBox></OutputBox>
      </section>
    </div>
  );
}

export default App;
