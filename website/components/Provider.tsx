"use client"

import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"



export default function Provider(props: {children?: ReactNode}) {
  return <SessionProvider>{props.children}</SessionProvider>
}