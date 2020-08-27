import React from 'react'
import ReactDOM from 'react-dom'

const User = (props) => {
  return (
      <div>
          <h2>{props.user.name}</h2>
          <img src={props.user.img} width={300} height={300}/>
          <div id='container'>
              <p>This is the end of the world as we know it</p>
          </div>
      </div>
  )
}

export const user = {
  name: 'John Smith',
  id: 12,
  img: 'https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc5MDgzNDc5NjcyNTQz/portrait-of-john-smith.jpg'
}

ReactDOM.render(
  <User user={user}/>,
  document.getElementById('app')
)