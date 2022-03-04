import * as React from 'react'

export interface CheckBoxProps {
  label: string
  checked: boolean
  readonly?: boolean
  onChange: (value: any) => void
}

export const CheckBox = (props: CheckBoxProps) => {
  const { label, checked, onChange, readonly } = props

  return (
    <div className="m-2 flex w-2/12 items-center">
      <input
        type="checkbox"
        className="flex-1 rounded-md bg-gray-200 px-2 py-2 text-sm"
        onChange={onChange}
        readOnly={readonly}
        checked={checked}
      />
      {label}
    </div>
  )
}
