'use client'

import React, { useEffect, useState } from 'react'
import MainHeader from './MainHeader'
import useLocalStorage from '@/hooks/useLocalStorage'
import { useStore } from '@/store/useStore'
import MainFooter from './MainFooter'

interface Props {
    children: React.ReactNode
}

const MainLayout: React.FC<Props> = ({ children }) => {
    const [isDarkMode] = useLocalStorage('darkMode')
    const { toggleDarkMode } = useStore()



    useEffect(() => {
        document.body.classList.toggle('dark-theme', isDarkMode)
        toggleDarkMode(isDarkMode)
    }, [isDarkMode])

    return (
        <div id="page-content">
            <MainHeader />
            <main>
                {children}
            </main>
            <MainFooter />
        </div>
    )
}

export default MainLayout