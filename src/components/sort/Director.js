import React from 'react';
import { connect } from "react-redux";
import '../../style/Find.css';
import Content from '../Content';


class Director extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      contents: []
    }
  }

  render() {
    const { contents } = this.props.state;
  
    
    var direcContents = [];

    for(var i=0 ; i < contents.length ; i++){
      for(var j=0 ; j < contents[i].director.length ; j++){
        if(this.props.location.state.direc === contents[i].director[j]){
          direcContents.push(contents[i]);
          break;
        }
      }
    }

    return (
      <div className="Find">
        <div className="contents">
          {direcContents.map(content => (
            <Content
              key={content._id}
              id={content._id}
              content={content}
            />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state: state };
}

export default connect(mapStateToProps, null)(Director);