import './App.scss';
import { useState } from 'react';
import Accordion from './components/Accordion/Accordion';
import Rating, { RatingValueType } from './components/Rating/Rating';
import Switch from './components/Switch/Switch';

function App() {
    const [ ratingValue, setRatingValue ] = useState<RatingValueType>(0);
    const [ accordionCollapsed, setAccordionCollapsed ] = useState(false);
    const [ switchStatus, setSwitchStatus ] = useState(false);

    const toggleCollapse = () => setAccordionCollapsed(!accordionCollapsed);

    return (
        <div className="App">
            <PageTitle title={ 'This is App component' } />
            <Rating ratingValue={ ratingValue }
                    setRatingValue={ setRatingValue } />
            <Accordion title={ 'Menu' }
                       accordionCollapsed={ accordionCollapsed }
                       toggleCollapse={ toggleCollapse } />
            <Switch status={ switchStatus } setStatus={ setSwitchStatus } />
        </div>
    );
}

function PageTitle({ title }: { title: string }) {
    return (
        <h1>{ title }</h1>
    );
}

export default App;
