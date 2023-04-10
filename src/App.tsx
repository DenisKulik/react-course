import './App.scss';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';
import Switch from './components/Switch/Switch';

// function declaration
function App() {
    return (
        <div className="App">
            <PageTitle title={ 'This is App component' } />
            <Rating value={ 4 } />
            <Accordion title={ 'Menu' } collapsed={ false } />
            <Switch />
        </div>
    );
}

function PageTitle({ title }: { title: string }) {
    return (
        <h1>{ title }</h1>
    );
}

export default App;
