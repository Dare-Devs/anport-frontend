import React from 'react'
import Porters from './Porters'
import { Switch, Route } from 'react-router-dom'
import StudentAffairs from './StudentAffairs'
import AppBar from '../../components/AppBar'

const AdminPage = () => {
  return (
    <div className="admin-page">
      <AppBar />
      <Switch>
        <Route exact path="/admin" component={StudentAffairs} />
        <Route path="/admin/student-affairs">
          <StudentAffairs />
        </Route>
        <Route path="/admin/porters">
          <Porters />
        </Route>
      </Switch>
    </div>
  )
}

export default AdminPage
