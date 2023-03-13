import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Form({ onSubmit }) {

  const [formData, setFormData] = useState(
        {
            firstName: '',
            lastName: '',
            contribution: '',
            date: '',
            issuer: ''
        });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value} = event.target;

    setFormData((prevFormData) => (
        {
            ...prevFormData,
            [name]: value
        }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can do something with the form data, like submitting it to a server
    axios
      .post("api link", formData)
      .then((res) => {
        console.log(res.formData)
      })
      .catch((err) => {
        console.log(err);
      });
      onSubmit(formData);
      navigate('/newInsert');
  };

  return (
    <form 
        onSubmit={handleSubmit} 
        className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md p-6"
    >
        
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="firstName">
          First name:
        </label>

        <input
          className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="firstName"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="lastName">
          Last name:
        </label>

        <input
          className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="lastName"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="contribution">
          Contribution:
        </label>

        <textarea
          className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="contribution"
          name="contribution"
          value={formData.contribution}
          onChange={handleInputChange}
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
          Date:
        </label>

        <input
          className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="date"
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="issuer">
          Issuer:
        </label>

        <input
          className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="issuer"
          type="text"
          name="issuer"
          value={formData.issuer}
          onChange={handleInputChange}
        />
      </div>
      
      <div className="flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
