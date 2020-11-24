import React from 'react';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      movies:[]
    }
  }

  componentDidMount() {
    // fetch('http://localhost:3001/api')
    //   .then(res => res.json())
    //   .then(data => this.setState({title: data.title}));
    fetch('http://localhost:4000/api')
      .then(res => res.json())
      .then(movies => this.setState({ movies }));
  }

  render() {
    return (
      <div className="App">
        <div>
          {this.state.movies.length !== 0? <h1>{this.state.movies.map(movie =>
            <div key={movie._id}>{movie.title}</div>
             )}</h1>:<h1>loading...</h1>}
        </div>
      </div>
    );
  }
}

export default App;