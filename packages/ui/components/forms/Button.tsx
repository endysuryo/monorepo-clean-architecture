import * as React from 'react'
import { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  onClick: () => void
  disabled?: boolean
  loading?: boolean
}

export const Button = (props: ButtonProps) => {
  const { children, onClick, disabled, loading } = props

  return (
    <button
      type="button"
      className={`m-2 rounded-md ${
        disabled
          ? 'bg-green-200'
          : 'bg-green-500 hover:bg-green-400 focus:bg-green-300'
      } px-4 py-1 text-white `}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? (
        <div className="flex h-full w-full items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full bg-white shadow-inner" />
        </div>
      ) : (
        children
      )}
    </button>
  )
}
