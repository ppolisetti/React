import React from 'react'

function Stylesheets(props) {
  let className=props.primary ? 'primary':''
  return (
    <div>
        <h1 className= 'APP' >Stylesheets</h1>
        <p>
            <a href='https://www.youtube.com/' target='_blank' rel="noreferrer">
             <h2 className={className}><b>Go to youtube</b></h2>
            </a>
        </p>
        </div>
  )
}

export default Stylesheets