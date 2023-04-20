import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
        <nav className="bg-gray-50 dark:bg-gray-700 mb-2">
            <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
                <div className="flex items-center">
                    <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                        <li>
                            <Link to={{ pathname: '/' }} className="text-gray-900 text-2xl dark:text-white hover:underline" aria-current="page">Certify</Link>
                        </li>
                        <li>
                            <Link to={{ pathname: '/certify-form' }} className="text-gray-900 text-2xl dark:text-white hover:underline">Create Certificate</Link>
                        </li>
                        <li>
                            <Link to={{ pathname: '/insert' }} className="text-gray-900 text-2xl dark:text-white hover:underline">Validation</Link>
                        </li>
                        <li>
                            <Link to={{ pathname: '/get-all' }} className="text-gray-900 text-2xl dark:text-white hover:underline">All Certificates</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default Navbar