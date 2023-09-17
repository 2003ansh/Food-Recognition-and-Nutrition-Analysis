import React, { useState } from "react";
import { Button, Card,Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
function ImageUploader(props) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [foodname, setFoodname] = useState(null);
  const [calorieval, setCalorieval] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      console.log('Selected image:', file.name);
    }
  };

  const uploadImage = async () => {
    if (!selectedImage) {
      alert('Please select an image first.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage, selectedImage.name);

    try {
      const response = await fetch('http://146.190.10.219:8000/predict', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Image upload successful');
        const data = await response.json();
        console.log('Image upload successful:', data);
        const { 'Calories': Calories, 'Food Item': foodItem } = data.document;
        setFoodname(foodItem);
          setCalorieval(Calories);
        console.log('Calories:', Calories);
        console.log('Food Item:', foodItem);
        // Handle the API response here
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
    reader.readAsDataURL(selectedImage);
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
  return (
    <>
      <input
        type="file"
        accept="image/*"
        id="imageInput"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
      <Card style={{width:"18rem",backgroundColor:"transparent",border:"none"}}>
      <Card.Body style={{display:"flex",columnGap:"20px"}}>
      <Button variant={`${props.mode==="dark"?"outline-info":"outline-dark"}`} size="sm" onClick={() => document.getElementById('imageInput').click()}>
        Select Image
      </Button>
      
      <Button variant={`${props.mode==="dark"?"outline-light":"outline-primary"}`}size="sm" onClick={uploadImage}>Upload Image</Button>
      </Card.Body>
      <Card.Img  src={selectedImage ? URL.createObjectURL(selectedImage) : null} />
      </Card>
      
       {selectedImage?<Card
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
      </Card>:null
      }
      
    </>
  );
}

export default ImageUploader;
