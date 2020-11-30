// import axios from 'axios';
// import { response } from 'express';
// import React from 'react'

// // function Home(){

// //   // getMovies = async () => {
// //   //   const {
// //   //     data: {
// //   //       data: { movies }
// //   //     }
// //   //   } = await Axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
// //   //   this.setState({ movies, isLoading: false });
// //   // };
// //   // componentDidMount() {
// //   //   this.getMovies();
// //   // }

// //   // const getContents = async() => {
// //   //   axios.post('/content', {})
// //   //     .then(response => {
// //   //       console.log(response);
// //   //     })
// //   // }

// //   // useEffect(() => {
// //   //   this.getContents();
// //   // });a

// //   return(
// //     <div className="Home">
// //         <h1>Home</h1>
// //         <p>Welcome home!</p>
// //     </div>
// //   );

// // }

// // export default Home;


import React from 'react';
import axios from 'axios';
import Content from './Content';

class Home extends React.Component{
  state = {
    isLoading : true,
    contents: []
  }

  getContents = async () => {
    await axios.get("http://localhost:4000/content/")
      .then(data => {
        this.setState({ contents: data.data, isLoading: false });
      })
  };
  componentDidMount() {
    this.getContents();
  }

  render(){
    const { isLoading, contents } = this.state;

    return(
      <div className="Home">
        {isLoading ? (
          <div className="Loading">
            <span>Loading...</span>
          </div>
        ) : (
          <div className="Contents">
            {contents.map(content => (
              <Content 
                key={content._id}
                id={content._id}
                content={content}
              />
            ))}
          </div>
        )
        }
      </div>
    );
  }
}
export default Home;