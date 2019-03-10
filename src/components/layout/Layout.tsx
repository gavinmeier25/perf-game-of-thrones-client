import React, { ReactChild } from 'react'
import { Header } from './Head'
import { NavBar } from './NavBav'

interface Props {
  children?: ReactChild | React.ReactNode
  classes: any
}

export const Layout: React.FC<Props> = (props) => {
  return (
    <>
      <Header />
      <NavBar classes={props.classes} />
      {props.children}
    </>
  )
}
