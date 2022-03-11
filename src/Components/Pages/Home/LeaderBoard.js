import { Divider } from '@material-ui/core'
import React from 'react'
import Profile from './Profile';

export default function LeaderBoard() {
  const handleClick = (e) => {
    console.log(e.target)
  }
  return (
    <div className="board">
      <h1 className="leaderboard">LeaderBoard</h1>
      <div className="duration">
        <button onClick={handleClick} data-id='7'>7 Days</button>
        <button onClick={handleClick} data-id='30'>30 Days</button>
        <button onClick={handleClick} data-id='0'>All-Time</button>
      </div>

      <Profiles></Profiles>
    </div>
  )
}