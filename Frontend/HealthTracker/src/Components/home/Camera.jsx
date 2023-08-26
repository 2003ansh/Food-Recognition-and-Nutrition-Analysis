import React, { useEffect, useRef, useState } from 'react';

const CameraComponent = () => {
  const videoRef = useRef(null);
  const [imageData, setImageData] = useState(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const captureImage = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0);
    const dataURL = canvas.toDataURL('image/png');
    setImageData(dataURL);
  };

  useEffect(() => {
    startCamera(); // Start the camera when the component mounts
  }, []);

  return (
    <div>
      <div>
        <button onClick={captureImage}>Capture Image</button>
      </div>
      <video ref={videoRef} autoPlay playsInline style={{ display: imageData ? 'none' : 'block' }} />
      {imageData && <img src={imageData} alt="Captured" />}
    </div>
  );
};

export default CameraComponent;
