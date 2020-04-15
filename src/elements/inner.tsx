import React from "react"
// @jsx jsx 
import { jsx } from "theme-ui"

type InnerProps = {
  className?: string
  children?: React.ReactNode
}

const Inner = ({ className, children }: InnerProps) => (
  <div className={className} sx={{ width: `100vw`, textAlign: `left`, Zindex: `1` }}>
    {children}
  </div>
)

export default Inner
