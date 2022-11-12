import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
Album.propTypes = {
  album: PropTypes.object.isRequired,
};

function Album(props) {
  const { album } = props;
  return (
    <div className="album">
      <div className="album-thumbnail">
        <img src={album.thumbnailUrl} alt={album.name}></img>
      </div>
      <span className="album-name">{album.name}</span>
    </div>
  );
}

export default Album;
