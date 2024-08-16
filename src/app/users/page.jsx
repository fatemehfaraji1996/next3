import UserCards from '@/components/UserCards'
import React from 'react'
export const metadata = {
  title: 'user',
  description: 'active users',
}


export default async function users() {
return <UserCards></UserCards>
}
