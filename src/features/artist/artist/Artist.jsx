import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardLayout from 'features/dashboard//DashboardLayout';
import { fetchArtist } from '../artistActions';

class Artist extends Component {
  componentDidMount() {
    const { fetchArtist } = this.props;
    const { id } = this.props.match.params;
    console.log('IIIDEE', id);
    fetchArtist(id);
  }
  render() {
    return (
      <DashboardLayout>
        <h1>ARTIST</h1>
      </DashboardLayout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchArtist: id => {
      dispatch(fetchArtist(id));
    }
  };
};

export default connect(null, mapDispatchToProps)(Artist);
