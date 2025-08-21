import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '@components/Layout'
import Home from '@pages/Home'
import Groups from '@pages/Groups'
import Projects from '@pages/Projects'
import Members from '@pages/Members'
import Resources from '@pages/Resources'
import Join from '@pages/Join'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/members" element={<Members />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/join" element={<Join />} />
      </Route>
    </Routes>
  )
}