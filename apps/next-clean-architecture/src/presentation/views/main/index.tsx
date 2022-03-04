import React from 'react'
import { Button, TextField } from 'ui'

const MainView = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <button className="bg-sky-600 px-5 py-2 text-white hover:bg-sky-300">
        Sample Button
      </button>

      <TextField
        placeholder="Search"
        onChange={(e) => console.log(e.target.value)}
      />
      <Button onClick={() => console.log('hello')} disabled={true}>
        Search
      </Button>
    </div>
  )
}

export default MainView
