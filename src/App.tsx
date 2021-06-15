import './App.scss';
import { Select, Theme, Option } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const optionswithGroup = [
    { value: 'Carrot', addtData: 'Carrots are packed with vitamin A, providing 428% of the daily value', group: 'vegetables' },
    { value: 'Grapes', aaddtData: 'Grapes are convenient, healthy, and particularly high in potassium', group: 'fruits' },
    { value: 'Apple', addtData: 'One of the most popular fruits, apples are chock-full of nutrition.', group: 'fruits' },
    { value: 'Broccoli', addtData: 'It is rich in a sulfur-containing plant compound known as glucosinolate', group: 'vegetables' },
    { value: 'Garlic', addtData: 'Garlic has a long history of use as a medicinal plant, with roots tracing all the way back to ancient China and Egypt', group: 'vegetables' },
    { value: 'Orange', addtData: 'Oranges are known for their high vitamin C content, providing 91% of the DV in a single fruit.', group: 'fruits' },
    { value: 'Pomegranate', addtData: 'Pomegranate contain a lengthy list of beneficial plant compounds, such as flavonoids, tannins, and lignans.', group: 'fruits' },
    { value: 'Spinach', addtData: 'This leafy green tops the chart as one of the healthiest vegetables, thanks to its impressive nutrient profile', group: 'vegetables' }
  ]

  const optionswithoutGroup = [
    { value: 'Carrot', addtData: 'Carrots are packed with vitamin A, providing 428% of the daily value' },
    { value: 'Grapes', addtData: 'Grapes are convenient, healthy, and particularly high in potassium' },
    { value: 'Apple', addtData: 'One of the most popular fruits, apples are chock-full of nutrition.' },
    { value: 'Broccoli', addtData: 'It is rich in a sulfur-containing plant compound known as glucosinolate' },
    { value: 'Garlic', addtData: 'Garlic has a long history of use as a medicinal plant, with roots tracing all the way back to ancient China and Egypt' },
    { value: 'Orange', addtData: 'Oranges are known for their high vitamin C content, providing 91% of the DV in a single fruit.' },
    { value: 'Pomegranate', addtData: 'Pomegranate contain a lengthy list of beneficial plant compounds, such as flavonoids, tannins, and lignans.' },
    { value: 'Spinach', addtData: 'This leafy green tops the chart as one of the healthiest vegetables, thanks to its impressive nutrient profile' }
  ]

  const onChange = (selected: Option) => {
    console.log('selected item from menu component:', selected);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-dark text-center">Light Theme with grouped options</h1>
        <Select options={optionswithGroup} placeholder={'Choose'} />
        <hr />
        <h1 className="text-dark text-center">Dark Theme with grouped options</h1>
        <Select options={optionswithGroup} theme={Theme.DARK} placeholder={'Choose'} />
        <hr />
        <h1 className="text-dark text-center">Light Theme without grouped options</h1>
        <Select options={optionswithoutGroup} />
        <hr />
        <h1 className="text-dark text-center">Dark Theme without grouped options</h1>
        <Select options={optionswithoutGroup} theme={Theme.DARK} />
        <hr />
        <h1 className="text-dark text-center">Select with onChange call back</h1>
        <Select options={optionswithGroup} onChange={onChange} />
        <hr />
      </header>
    </div>
  );
}

export default App;
