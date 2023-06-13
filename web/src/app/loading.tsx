'use client'
import { Cube } from 'phosphor-react'

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Cube color="darkorchid" weight="duotone">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="4s"
          repeatCount="indefinite"
        ></animate>
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="5s"
          from="0 0 0"
          to="360 0 0"
          repeatCount="indefinite"
        ></animateTransform>
      </Cube>
    </div>
  )
}
