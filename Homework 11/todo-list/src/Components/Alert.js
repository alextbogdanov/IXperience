import React from 'react'

export default function Alert({
    className = '',
    children
}) {
  return (
    <div className={"alert alert-primary " + className} role="alert">
        {children}
    </div>
  )
}
