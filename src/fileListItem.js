import CommitMessage from './commitMessage.js';
import FileIcon from './fileIcon.js';
import FileName from './fileName.js';
import PropTypes from 'prop-types';
import React from 'react';
import Time from './time.js';

const FileListItem = ({ file }) => (
  <tr className="file-list-item">
    <td className="file-icon"><FileIcon file={file} /></td>
    <td><FileName file={file} /></td>
    <td><CommitMessage commit={file.latestCommit} /></td>
    <td className="age"><Time time={file.updated_at} /></td>
  </tr>
);

FileListItem.propTypes = {
  file: PropTypes.object.isRequired
};

export default FileListItem;
