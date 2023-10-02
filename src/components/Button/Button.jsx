import React from 'react'

const Button = (props) => {
  return (
    <div {...props} className={"button " + props.className }>Button</div>
  )
}

export default Button