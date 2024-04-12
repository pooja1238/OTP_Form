import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import "../src/App.css";
import img from "../src/img.jpeg";
import city from "./Cities";
import tel from "./TelCode";

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNo: '+91',
    countryCode: '+91',
    otp: '',
    email: '',
    dob: '',
    city: '',
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name == "countryCode") {
      setFormData({ ...formData, [name]: value, contactNo:value });
    }
      

    
console.log(name,value)
  };

  const handleSave = () => {
    localStorage.setItem('formData', JSON.stringify(formData));
    // Clear form data after saving
    setFormData({
      name: '',
      contactNo: '',
      countryCode: '+91',
      otp: '',
      email: '',
      dob: '',
      city: '',
      gender: ''
    });
  };

  const handleEdit = () => {
    const storedData = JSON.parse(localStorage.getItem('formData'));
    if (storedData) {
      setFormData(storedData);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={img} alt="Your Image" className="img-fluid" />
        </div>

        <div className="col-md-6 main-form">
        <h4>Create Your Account With Divine Connection </h4>
          <form>
            <div className="form-group">
            <label>Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-input" />
            </div>

            <div className="form-group">
              <label style={{width:"105px"}}>Contact No:</label>
              <div className="input-group">
             
                <select name="countryCode" value={formData.dial_code} onChange={handleChange} className="custom-select" >
                <option value="+91">In</option>
                {tel.map(item => (
                  <option key={item.id} value={item.dial_code}>{item.code}</option>
                ))}
                  {/* Add more country codes if needed */}
                </select>
                <input type="text" name="contactNo" value={formData.contactNo} onChange={handleChange} className="form-input" />
              </div>
            </div>

            <div className="form-group">
              <label>OTP:</label>
              <input type="text" name="otp" value={formData.otp} onChange={handleChange} className="form-input" />
            </div>

            <div className="form-group">
              <label>E-Mail:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" />
            </div>

            <div className="form-group">
              <label>Date of Birth:</label>
              <input type="date"  className="form-input" name="dob" value={formData.dob} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Place of Birth:</label>
              <select name="city" value={formData.city} onChange={handleChange} className="custom-select custom-city">
                <option value=""></option>
                {city.map(item => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Gender:</label>
              <div className="gender-select">
                <label className="mr-3 ">
                  <input type="radio" name="gender" value="Male" style={{accentColor:"#682F96"}} checked={formData.gender === 'Male'} onChange={handleChange} />
                  Male
                </label>
                <label className="mr-3">
                  <input type="radio" name="gender" value="Female" style={{accentColor:"#682F96"}} checked={formData.gender === 'Female'} onChange={handleChange} />
                  Female
                </label>
                
              </div>
            </div>
            <div className="btn-div">
            <button type="button" onClick={handleSave} className="btn btn-primary mr-2 ">Save</button>
            <button type="button" onClick={handleEdit} className="btn btn-secondary ">Edit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
