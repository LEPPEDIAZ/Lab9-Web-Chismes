import React from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../reducers';
import * as actions from '../../actions/users';
import Noticias from '../Noticias';


const UserNoticias = ({ userIds }) => (
  userIds.length > 0 ? (
    <ul>
      { userIds.map(id => <Noticias key={id} id={id} />) }
    </ul>
  ) : (
    <div className="noUsers">
      <h3>
      { 'No hay chismes' }
    </h3>
    </div>
  )
);


export default connect(
  state => ({
    userIds: selectors.getUserIds(state),
  }),
  undefined,
)(UserNoticias);
