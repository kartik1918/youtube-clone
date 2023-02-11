import React from 'react'

const Sidebar = () => {

    // TO-DO
    // installing redux toolkit
  return (
    <div className='p-5 shadow-lg w-48'>
        <ul>
            <li>Home</li>
            <li>Shorts</li>
            <li>Live</li>
        </ul>
        <h1 className='font-bold pt-5'>Subscription</h1>
        <ul>
            <li>Library</li>
            <li>History</li>
            <li>Your Videos</li>
            <li>Watch Later</li>
        </ul>
        <h1 className='font-bold pt-5'>Explore</h1>
        <ul>
            <li>Trending</li>
            <li>Music</li>
            <li>Movies</li>
            <li>Gaming</li>
        </ul>
    </div>
  )
}

export default Sidebar