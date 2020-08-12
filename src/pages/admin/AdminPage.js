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
        <Route exact path="/" component={StudentAffairs} />
        <Route path="/student-affairs">
          <StudentAffairs />
        </Route>
        <Route path="/porters">
          <Porters />
        </Route>
      </Switch>
    </div>
  )
}

export default AdminPage
