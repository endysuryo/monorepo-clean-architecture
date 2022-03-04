import React from 'react'
import { Link } from 'react-router-dom'
import { Button, TextField } from 'ui'

const Main = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Link to="/campaign">
        <button className="bg-sky-600 px-5 py-2 text-white hover:bg-sky-300">
          Sample Button
        </button>
      </Link>
      <TextField
        placeholder="Search"
        onChange={(e) => console.log(e.target.value)}
      />
      <Button onClick={() => console.log('hello')} disabled={true}>
        Search Button
      </Button>
    </div>
  )
}

export default Main
