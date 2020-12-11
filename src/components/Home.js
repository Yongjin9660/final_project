import React from 'react';
import axios from 'axios';
import Content from './Content';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import "../style/Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      criteria: "",
      contents: [],
      showContents: [],
      searchTitle: ""
    }
  }

  getContents = async () => {
    await axios.get("http://localhost:4000/content/")
      .then(data => {
        this.props.dispatchContents(data.data);
        var contents = data.data.sort((a, b) => Number(b.rating) - Number(a.rating));
        this.setState({ contents: contents, showContents: contents, isLoading: false, dataNumber: data.data.length });
      })
  };
  componentDidMount() {
    this.getContents();
  }

  render() {
    const { isLoading, contents, showContents, criteria, searchTitle } = this.state;

    if(this.props.state.searchTitle === ""){

    }else{
      var sT = this.props.state.searchTitle;
      if(sT !== searchTitle){
        let temp = contents.filter(function(content){
          return content.title.includes(sT);
        });
        this.setState({showContents : temp, searchTitle : sT});
        
      }
    }

    if(this.props.state.criteria === "rating"){
      if(criteria !== "rating"){
        let temp = showContents.sort((a, b) => Number(b.rating) - Number(a.rating));
        this.setState({ showContents : temp , criteria:"rating"});
      }
    }
    else if(this.props.state.criteria === "ratingNumber"){
      if(criteria !== "ratingNumber"){
        let temp = showContents.sort((a, b) => Number(b.ratingNumber) - Number(a.ratingNumber));
        this.setState({ showContents : temp , criteria:"ratingNumber"});
      }
    }
    else if(this.props.state.criteria === "new"){
      if(criteria !== "new"){
        let temp = showContents.sort((a, b) => {
          if(a.addDate > b.addDate)
            return -1;
          if(a.addDate < b.addDate)
            return 1;
          return 0;
        });
        this.setState({ showContents : temp , criteria:"new"});
      }
    }
    else if(this.props.state.criteria === "old"){
      if(criteria !== "old"){
        let temp = showContents.sort((a, b) => {
          if(a.addDate < b.addDate)
            return -1;
          if(a.addDate > b.addDate)
            return 1;
          return 0;
        });
        this.setState({ showContents : temp , criteria:"old"});
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
              {showContents.map(content => (
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
function mapDispatchToProps(dispatch) {
  return {
      dispatchContents: (contents) => dispatch(actionCreators.SetContents(contents))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);