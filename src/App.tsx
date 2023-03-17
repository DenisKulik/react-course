import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";

// function declaration
function App() {
    return (
        <div>
            <PageTitle title={'This is App component'} />
            <Rating />
            <Accordion title={'Menu'} collapsed={false} />
            <Rating />
        </div>
    );
}

function PageTitle({title}: { title: string }) {
    return (
        <h1>{title}</h1>
    )
}

export default App;
