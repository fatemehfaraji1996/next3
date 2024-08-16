import UserCards from '@/components/UserCards'
import React from 'react'
import dynamic from 'next/dynamic'
export const metadata = {
  title: 'user',
  description: 'active users',
}
// const lazy = dynamic(()=>import('../../components/UserCards'),{loding:()=> <p>loding</p> })

export default async function users() {
return <UserCards></UserCards>
// return lazy
}
