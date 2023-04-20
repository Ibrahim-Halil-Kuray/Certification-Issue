import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

function AllParticipants() {
  const [allData, setAllData] = useState([]);

  const handleGetAllForm = (event) => {
    event.preventDefault();

    axios
      .get(`http://localhost:8081/api/items/books`)
      .then((response) => {
        setAllData(response.data);
      })
      .catch((err) => {
        console.log({ message: err.message });
      });
  };

  useEffect(() => {
    console.table(allData);
  }, [allData]);
  return (
    <main>
      <Navbar />
      <form className="max-w-md mx-auto bg-green-100 rounded-lg overflow-hidden shadow-md p-6">
        <div className="mb-4">
          <button
            onClick={handleGetAllForm}
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Get all certificate
          </button>
        </div>
      </form>
        <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        First Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Last Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Contribution
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Issuer
                    </th>
                </tr>
            </thead>
            <tbody>
            {allData && allData.map((person, index) =>(
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {person.firstName}
                    </th>
                    <td className="px-6 py-4">
                    {person.lastName}
                    </td>
                    <td className="px-6 py-4">
                    {person.contribution}
                    </td>
                    <td className="px-6 py-4">
                        {person.date}
                    </td>
                    <td className="px-6 py-4">
                        {person.issuer}
                    </td>
                </tr>
            ))}

            </tbody>
        </table> 
        </div> 
    </main>
  );
}

export default AllParticipants;






