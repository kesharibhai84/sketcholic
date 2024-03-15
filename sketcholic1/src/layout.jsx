import React from 'react'
import Header from './assets/components/header/header'
import { Outlet } from 'react-router-dom'
import Footer from './assets/components/footer/footer'

function Layout() {
    return (
        <>
         <Header/>
         <Outlet/>
         <Footer/>
        </>
    )
}

export default Layout
