import React from 'react'

export default function FormTextInput(props) {
  return (
    <div className="mt-3">
        <label htmlFor={props.name} className="form-label fw-bold">{props.text}</label>
        <input type="text" className="form-control" id={props.name}></input>
    </div>
  )
}
