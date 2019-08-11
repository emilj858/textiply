/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import {useDropzone} from 'react-dropzone';

const Dropzone = (props) => {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
      accept: 'text/csv, application/vnd.ms-excel'
  });
  
  const files = acceptedFiles.map(file => (
    <p key={file.path}>
      {file.path} - {file.size} bytes
    </p>
  ));

  return (
    <section className="container">
      <aside>
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          <button>Select CSV</button>
        </div>
        <ul>{files}</ul>
      </aside>

    </section>
  );
}

export default Dropzone;