import React, { Component } from "react";

export default class Fave extends Component {
  state = {
    isFave: false
  };

  render() {
    const handleClick = (event) => {
      console.log("Fave handling Fave click!", event);
      this.setState( {
          isFave: this.state.isFave ? false : true
      })
      this.props.callBackFilmRow(this.state);
      event.stopPropagation();
    };
    const isFave = this.state.isFave ? 'remove_from_queue' : 'add_to_queue';
    return (
      <div className="film-row-fave add_to_queue" onClick={handleClick}>
        <p className="material-icons">{ isFave }</p>
      </div>
    );
  }
}
