import React from 'react'
import Navbar from './Navbar'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <h1 className="text-4xl font-bold text-center  dark:bg-gray-700 text-white mb-2" >Certification Projet Developed for Proxeus</h1>
      <section className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="https://www.proxeus.org/">
              <img className="rounded-t-lg" src="https://images.squarespace-cdn.com/content/v1/599bfc6803596ef973b3fade/1524492014420-2N5ER87XVNBPMTHSB1XQ/Proxeus?format=1000w" alt="proxeus associatins image" />
          </a>
          <div className="p-5">
              <a href="https://www.proxeus.org/">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Proxeus Association Official Web Page</h5>
              </a>
              <a href="https://doc.proxeus.com/#/">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Documentation</h5>
              </a>
              <a href="https://morrison.proxeus.org/">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Application</h5>
              </a>
          </div>
      </section>
    </main>
  )
}
