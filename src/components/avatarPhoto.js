import React from 'react'

export default function avatarPhoto(props) {
    const url = props.url || "images/Avatar-02.png"
  return (
    <div className="f-avatar-large">
        <img src={url} loading="lazy" alt="" className="f-avatar-image"/>
        
        </div>

  )
}
