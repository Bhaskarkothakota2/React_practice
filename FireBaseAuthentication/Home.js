import React from 'react'
import { auth } from './FireBase'

function Home(props) {
  return (
    <div>
        <h1>Welcome Home {props.presentUser.email}</h1>
        <br/><br/>
        <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  )
}

export default Home