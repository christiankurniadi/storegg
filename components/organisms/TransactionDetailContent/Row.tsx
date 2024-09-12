import React from "react"

interface RowProps {
  label: string
  value: string | number
  color?: string
}

export default function Row(props: RowProps) {
  const { label, value, color } = props
  return (
    <p className="text-lg color-palette-1 mb-20">
      {label} <span className={`purchase-details ${color}`}>{value}</span>
    </p>
  )
}
