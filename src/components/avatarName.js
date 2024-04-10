import React from 'react'

export default function Avatar(props) {
  const size = props.size || "large"
  const sizeAbbr = size[0] || "l";
  const sizeClass = `f-avatar-${size}`
  const textSizeClass = `f-avatar-text-${sizeAbbr}` 
  const initialNames=props.names || "IP"
  const totalClases=`${sizeClass} ${props.className}`

  return (
    <div class={totalClases}>
      <div class={textSizeClass}>{initialNames}</div>
    </div>
  )
}
