import React from 'react'

export default function avatar(props) {
  const size = props.size || "large"
  const sizeAbbr = size[0] || "l";
  const sizeClass = `f-avatar-${size}`
  const textSizeClass = `f-avatar-text-${sizeAbbr}` 
  const initialNames=props.names || "IP"

  return (
    <div class={sizeClass}>
      <div class={textSizeClass}>{initialNames}</div>
    </div>
  )
}
