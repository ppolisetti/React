import React from 'react'
import {UserContext} from '../App'
function ComponentC() {  
  return (
    <div>
        <UserContext.Consumer>
            {
                user =>{
                    return <div>User Context Value {user}</div> 
                        // <ChannelContext.Consumer>
                        //    { channel => {
                        //         return(
                        //         <div>User Context Value {user}, Channel Context Value {channel}</div> 
                        //          )
                        //     }}
                        // </ChannelContext.Consumer>
                    
                    
                }
            }
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentC