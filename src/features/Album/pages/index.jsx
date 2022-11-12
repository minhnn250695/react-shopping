import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from '../components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const listAlbum = [
    {
      id: 1,
      name: 'Album 1',
      thumbnailUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/4/0/f/6/40f64c272c48d73fcad8966f227ff5db.jpg',
    },
    {
      id: 2,
      name: 'Album 2',
      thumbnailUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/a/5/a/4/a5a42013373df95b53b3b394931783a7.jpg',
    },
    {
      id: 3,
      name: 'Album 3',
      thumbnailUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/0/d/0/f/0d0faf047c5abd77b9391250cef59da3.jpg',
    },
  ];
  return (
    <div>
      <p>This is new hot album</p>
      <AlbumList listAlbum={listAlbum}></AlbumList>
    </div>
  );
}

export default AlbumFeature;
