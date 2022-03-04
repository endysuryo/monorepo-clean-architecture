import * as React from 'react'

export interface TextFieldProps {
  placeholder: string
  onChange: (value: any) => void
  readonly?: boolean
}

export const TextField = (props: TextFieldProps) => {
  const { placeholder, onChange, readonly } = props

  return (
    <div className="m-2 flex w-2/12">
      <input
        type="text"
        className="flex-1 rounded-md bg-gray-200 px-4 py-2 text-sm"
        placeholder={placeholder}
        onChange={onChange}
        readOnly={readonly}
      />
    </div>
  )
}
