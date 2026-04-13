"use client";

import Sidebar from '@/src/components/layout/member/Sidebar';
import { SessionProvider } from 'next-auth/react';
import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <SessionProvider>
        <div className='flex'>
            <Sidebar />
            {children}
        </div>
    </SessionProvider>
  )
}

export default layout