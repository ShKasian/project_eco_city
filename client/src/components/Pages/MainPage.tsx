import React from 'react'
import { useAppSelector } from "../../hooks/reduxHooks"

export default function MainPage(): JSX.Element {

  const user = useAppSelector(state => state.user)

  return (
    user?.isAdmin === true &&(
    <div>I am Admin</div>
    )
    // <div>MainPage</div>
  )
}
