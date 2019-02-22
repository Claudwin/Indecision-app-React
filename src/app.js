console.log('App.js is running');

const app = {
    title: 'Indecision',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}
 const removeAll = () => {
     app.options = [];
     renderApp();
 };

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
}
const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const renderApp = () => {
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : "No options"}</p>
        <p>{app.options.length}</p>
        <button onClick={removeAll}>Remove All</button>
        <ol>
            {
                app.options.map((option) => <li key="option">{option}</li>)
            }
        </ol>
        <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
        </form>
    </div>
);
ReactDOM.render(template, appRoot);
};

renderApp();