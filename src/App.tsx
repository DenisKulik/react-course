import './App.scss';

const App = () => {
    return (
        <div className="App">
            <PageTitle title={'This is App component'} />
        </div>
    );
};

const PageTitle = ({ title }: { title: string }) => {
    return (
        <h1>{title}</h1>
    );
};

export default App;
