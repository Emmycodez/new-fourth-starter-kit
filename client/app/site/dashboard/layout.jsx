import React from 'react'
import LayoutClient from './_components/LayOutClient'
import { dashboardUserData } from '@/actions/getUser'

const layout = async ({children}) => {
  const data = await dashboardUserData()
  return (
    <LayoutClient dashData={data}>{children}</LayoutClient>
  )
}

export default layout