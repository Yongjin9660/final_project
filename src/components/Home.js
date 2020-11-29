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

class Home extends React.Component{
  state = {
    isLoading : true,
    contents: []
  }

  getContents = async () => {
    // const {
    //   data: {
    //     data: { contents }
    //   }
    // } = await axios.get("http://localhost:4000/content/");
    await axios.get("http://localhost:4000/content/")
      .then(data => {
        this.setState({ contents: data.data, isLoading: false });
        console.log(this.state.contents);
      })
  };
  componentDidMount() {
    this.getContents();
  }

  render(){
    const { isLoading, contents } = this.state;

    return(
      <div className="Home">
        <p>Welcome home!</p>
        {isLoading ? (
          <div className="Loading">
            <span>Loading...</span>
          </div>
        ) : (
          <div className="Contents">
            {contents.map(content => (
              <>
              <h1>{content.title}</h1>
              <img src={content.url} title={content.title} alt={content.title}/>
              </>
            ))}
          </div>
        )

        }
      </div>
    );
  }
}
export default Home;


// function Home(){
//   const [content, setContent] = useState([]);

//   const getContents = async () => {
//     // const {
//     //   contents : {
//     //     contents : {setContent}
//     //   } = await axios.get("http://localhost:4000/content");
//     // }
//     await axios.get("http://localhost:4000/content")
//       .then(data => {
//         console.log(data.data);
//         setContent(data.data);
//         //setContent(data);
//       });
//   }

//   useEffect(()=>{
//     getContents();
//   });

//   // useEffect(async ()=>{
//   //   axios('/content',{})
//   //     .then(response => {
//   //       console.log(response.data);
//   //       setContent(response.data);
//   //     })
//   //     .catch(err => {
//   //       console.log(err);
//   //     })
//   // });

//   return(

//   );

// }

// export default Home;