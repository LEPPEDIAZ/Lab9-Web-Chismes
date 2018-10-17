import React from 'react';
import { connect } from 'react-redux';

import UserList from '../UserList';
import UserForm from '../UserForm';
import UserNoticias from '../UserNoticias';
import './index.css';


const UserApp = () => (
  <div className="usersApp">
    <h1>
      { 'Los Chismes' }
    </h1>
    <h2>
      { 'Ultimos chismes' }
    </h2>
    <UserList />
    <h2>
      { 'Nuevo chisme:' }
    </h2>
    <UserForm />
    <h2>
      { '                                                                                                                                  ' }
    </h2>
    <h2>
      { 'Noticias de Chismes:' }
    </h2>
    <UserNoticias />

  </div>
);

export default UserApp;
