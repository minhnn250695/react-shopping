import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './style.scss';
AlbumList.propTypes = {
  listAlbum: PropTypes.array.isRequired,
};

function AlbumList(props) {
  const { listAlbum } = props;
  return (
    <ul className="album-list">
      {listAlbum.map((album) => (
        <li key={album.id}>
          <Album album={album}></Album>
        </li>
      ))}
    </ul>
  );
}

export default AlbumList;
