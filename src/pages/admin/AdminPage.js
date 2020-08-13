import React from 'react'
import Porters from './Porters'
import { Switch, Route } from 'react-router-dom'
import StudentAffairs from './StudentAffairs'
import AppBar from '../../components/AppBar'
import Footer from '../../components/Footer'

const AdminPage = () => {
  return (
    <div className="admin-page">
      <AppBar />
      <Switch>
        <Route exact path="/admin">
          <h1>Hello</h1>
        </Route>
        <Route path="/admin/student-affairs">
          <StudentAffairs />
        </Route>
        <Route path="/admin/porters">
          <Porters />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default AdminPage
