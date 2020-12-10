import React from 'react';
import axios from 'axios';
import Content from './Content';
import { connect } from 'react-redux';
import "../style/Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      criteria: "",
      contents: []
    }
  }

  getContents = async () => {
    await axios.get("http://localhost:4000/content/")
      .then(data => {
        console.log(data.data);
        var contents = data.data;
        // var contents = data.data.sort((a, b) => Number(b.rating) - Number(a.rating));
        this.setState({ contents: contents, isLoading: false, dataNumber: data.data.length });
      })
  };
  componentDidMount() {
    this.getContents();
  }

  render() {
    const { isLoading, contents } = this.state;

    if(this.props.state.criteria === "rating"){
      if(this.state.criteria !== "rating"){
        var temp = contents.sort((a, b) => Number(b.rating) - Number(a.rating));
        this.setState({ contents : temp , criteria:"rating"});
      }
    }
    else if(this.props.state.criteria === "ratingNumber"){
      if(this.state.criteria !== "ratingNumber"){
        var temp = contents.sort((a, b) => Number(b.ratingNumber) - Number(a.ratingNumber));
        this.setState({ contents : temp , criteria:"ratingNumber"});
      }
    }
    else if(this.props.state.criteria === "new"){
      if(this.state.criteria !== "new"){
        console.log(contents[0].addDate);
        var temp = contents.sort((a, b) => {
          if(a.addDate > b.addDate)
            return -1;
          if(a.addDate < b.addDate)
            return 1;
          return 0;
        });
        this.setState({ contents : temp , criteria:"new"});
      }
    }
    else if(this.props.state.criteria === "old"){
      if(this.state.criteria !== "old"){
        var temp = contents.sort((a, b) => {
          if(a.addDate < b.addDate)
            return -1;
          if(a.addDate > b.addDate)
            return 1;
          return 0;
        });
        this.setState({ contents : temp , criteria:"old"});
      }
    }

    return (
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

const mapStateToProps = (state) => ({
  state: state
});


export default connect(mapStateToProps, null)(Home);