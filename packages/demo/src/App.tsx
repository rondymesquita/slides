import { Presentation, PresentationProvider } from '@rondymesquita/splendid';
import './App.css';
import * as slides from '../index.md';

function App() {
  return (
    <>
      <PresentationProvider slides={slides} theme={'classic'}>
        <Presentation />
      </PresentationProvider>
    </>
  );
}

export default App;
