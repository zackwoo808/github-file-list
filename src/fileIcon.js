import React from 'react';
import PropTypes from 'prop-types';

function FileIcon({ file }) {
  let icon = 'far fa-file-alt';
  if (file.type === 'folder') {
    icon = 'fas fa-folder';
  }

  return (
    <span>
      <i className={`${icon}`} />
    </span>
  )
};

FileIcon.propTypes = {
  file: PropTypes.object.isRequired
};

export default FileIcon;
