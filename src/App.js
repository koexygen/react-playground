import Accordion from './components/Accordion'

const items = [
    {title: 'What is React?', content: 'React is javascript front-end library'},
    {title: 'What is React2?', content: 'React is javascript front-end library'},
    {title: 'What is React3?', content: 'React is javascript front-end library'},
]

function App() {
  return (
    <div className="App">
      <h1>hi</h1>
        <Accordion items={items}/>
    </div>
  );
}

export default App;
