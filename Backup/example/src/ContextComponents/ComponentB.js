import React from 'react'
import { useContext } from 'react'
import { UserContext} from '../App'

function ComponentB() {
   const user=useContext(UserContext)
    
  return (
    <div>
        {user}
    </div>
  )
}

export default ComponentB