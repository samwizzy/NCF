import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { TiCameraOutline } from 'react-icons/ti';

function PassportDropzone() {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className='flex items-center justify-center w-32 h-32 border-2 border-dashed border-gray-400 p-8'
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <TiCameraOutline size='40' />
      ) : (
        <TiCameraOutline size='40' color='#aaa' />
      )}
    </div>
  );
}

export default PassportDropzone;
