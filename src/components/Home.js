import React from 'react';


function Home(){

  return(
    <div className="Home">
        <h1>Home</h1>
        <p>Welcome home!</p>
    </div>
  );

}

export default Home;

// class Home extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {
    
//     }
//   }
//   render() {
//     return (
//       <div className="Home">
//       </div>
//     );
//   }
// }


// class App extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       movies:[]
//     }
//   }

//   componentDidMount() {
//     fetch('http://localhost:4000/api')
//       .then(res => res.json())
//       .then(movies => this.setState({ movies }));
//   }

//   render() {
//     return (
//       <div className="App">
//         <div>
//           {this.state.movies.length !== 0? <h1>{this.state.movies.map(movie =>
//             <div key={movie._id}>{movie.title}</div>
//              )}</h1>:<h1>loading...</h1>}
//         </div>
//       </div>
//     );
//   }
// }

// export default App;