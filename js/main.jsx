class App extends React.Component {
  render() {
    return (
       <div>
         <h1>Hello JSX and the World!</h1>
       </div>
    );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);