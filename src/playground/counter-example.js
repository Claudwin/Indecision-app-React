let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};



const renderCounterApp = () => {
  const template2 = ( 
    <div>
    <h1> Count: {count} < /h1> 
    <button onClick = {addOne}> +1 </button><br/>
    <
    button onClick = {
      minusOne
    } > -1 < /button><br/ >
    <
    button onClick = {
      reset
    } > reset < /button> <
    /div>
  );
  ReactDOM.render(template2, appRoot);
};

renderCounterApp();