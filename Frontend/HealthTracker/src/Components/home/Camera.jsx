import React, { useEffect, useRef, useState } from "react";
import { Button, Card } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";

const CameraComponent = (props) => {
  const videoRef = useRef(null);
  const [imageData, setImageData] = useState(null);

  const startCamera = async () => {
    try {
      const constraints = {
        video: {
          facingMode: "environment", // Use the rear camera
        },
      };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const captureImage = () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext("2d").drawImage(videoRef.current, 0, 0);
    canvas.toBlob((blob) => {
      props.handleimage(blob); // Send the captured image as a Blob
      setImageData(blob); // Store the Blob in state
      setProcessimg(true);
    }, 'image/jpeg');
  };

  useEffect(() => {
    startCamera(); // Start the camera when the component mounts
  }, []);

  const [processcap, setProcesscap] = useState(false);
  const [processimg, setProcessimg] = useState(false);
  const [foodname, setFoodname] = useState(null);
  const [calorieval, setCalorieval] = useState(null);

  const sendImage = async () => {
    if (!imageData) {
      alert('Please capture an image before sending.');
      return;
    }
    setProcesscap(true);
    setDetails(true);

    const formData = new FormData();
    formData.append('image', imageData, 'captured.jpg');

    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint URL
      const response = await fetch('http://146.190.10.219:8000/predict', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Response data:', data);
        const { 'Calories': Calories, 'Food Item': foodItem } = data.document;
        console.log('Calories:', Calories);
        console.log('Food Item:', foodItem);

        if (data.error) {
          alert(data.error);
        } else {
          setFoodname(foodItem);
          setCalorieval(Calories);
          setDetails(foodItem, Calories);
          setProcesscap(false);
        }
      } else {
        console.error('Image upload failed:', response.status, response.statusText);
        alert('Image upload failed.');
      }
    } catch (error) {
      console.error('Image upload error:', error);
      alert('Image upload failed.');
    }
  };

  const save = () => {
    const url = 'http://146.190.10.219:5000/api/dailyeat/addfood';

    // Read the image file and convert it to base64
    const reader = new FileReader();
    reader.readAsDataURL(imageData);
    reader.onload = function () {
      const base64Image = reader.result;

      const requestBody = {
        Foodname: foodname,
        Photo: base64Image, // Send the base64 image as a string
        Calorie: calorieval,
      };
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': props.token,
        },
        body: JSON.stringify(requestBody),
      };
      console.log(props.token);

      fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          console.log('Response data:', data);
          if (data.error) {
            alert(data.error);
          } else {
            alert('Food added successfully');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          console.log(requestBody);
        });
    };
  };

  const [details, setDetails] = useState(false);

  return (
    <>
      <Card
        style={{
          width: '19rem',
          border: 'none',
          backgroundColor: 'transparent',
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          playsInline
          style={{ display: props.show ? 'block' : 'none' }}
        />
        <br />
        {imageData && (
          <img src={URL.createObjectURL(imageData)} alt="Captured" />
        )}
        <Card.Body
          style={{
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <Button
            size="sm"
            className={`${
              processcap ? 'btn btn-danger disabled' : 'btn btn-danger'
            }`}
            onClick={captureImage}
          >
            {imageData ? 'Retake' : 'Capture'}
          </Button>
          <Button
            size="sm"
            className={`${
              processimg ? 'btn btn-success' : 'btn btn-success disabled'
            }`}
            onClick={sendImage}
          >
            Click to process
          </Button>
        </Card.Body>
      </Card>
      {details && (
        <Card
          style={{
            width: '19rem',
            border: 'none',
            backgroundColor: 'transparent',
            display: 'flex',
            rowGap: '10px',
          }}
        >
          <Card.Subtitle style={{color:`${props.mode==="dark"?"white":"black"}`}}>
            Food Name :
            {foodname === null ? <Spinner size="sm"></Spinner> : foodname}
          </Card.Subtitle>
          <Card.Subtitle style={{color:`${props.mode==="dark"?"white":"black"}`}}>
            Calorie Value :{' '}
            {calorieval === null ? <Spinner size="sm"></Spinner> : calorieval}
          </Card.Subtitle>
          {props.token?
          <Button className="btn btn-success" onClick={save}>
          Save
          </Button>:<Button className="btn btn-success" >
          <Link to={"/login"} style={{textDecoration:"none",color:"inherit"}}>Login to save</Link>
          </Button>
}
        </Card>
      )}
    </>
  );
};

export default CameraComponent;
