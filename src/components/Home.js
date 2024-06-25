import React from 'react'

export default function Home({mode}) {
  return (
    <div className={`text-center text-${mode === 'light' ? 'dark' : 'light'}`}>

        <h2> welcome this is home page </h2>
    </div>
  )
}
