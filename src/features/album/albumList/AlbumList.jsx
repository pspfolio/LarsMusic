import React, { Component } from 'react';

class AlbumList extends Component {
  constructor(props) {
    super(props);
    console.log('ALBUMLIST');
  }
  render() {
    return (
      <div>
        <h1>This is album list</h1>
      </div>
    );
  }
}

export default AlbumList;
