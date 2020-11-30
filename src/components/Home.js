import React from 'react';
import axios from 'axios';
import Content from './Content';
import "../style/Home.css";

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
          <div className="contents">
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