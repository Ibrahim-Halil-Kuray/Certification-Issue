import React from 'react'
import Navbar from './Navbar'

function NewInsert({ data }) {
  return (
    <main>
      <Navbar/>

      <h2 className="text-4xl font-bold text-center  dark:bg-gray-700 text-white mb-2"> Entered Data </h2>

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
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {data.firstName}
                      </th>
                      <td className="px-6 py-4">
                        {data.lastName}
                      </td>
                      <td className="px-6 py-4">
                        {data.contribution}
                      </td>
                      <td className="px-6 py-4">
                          {data.date}
                      </td>
                      <td className="px-6 py-4">
                          {data.issuer}
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>

    </main>
  )
}

export default NewInsert