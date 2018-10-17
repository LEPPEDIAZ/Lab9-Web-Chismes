import React from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';

import * as selectors from '../../reducers';
import * as actions from '../../actions/users';


const User = ({ Titulo, lastName, chisme, email, isConfirmed, onDelete }) => (
  
  <li>
    { 'Chisme :  ' }
    { Titulo }
    { '       ' }
    <a onClick={onDelete}>
      &times;
    </a>
    
    <button onClick={() => {alert(chisme);}}>Leer</button>
    {
      !isConfirmed && (
        <Spinner name="ball-beat" color="purple"/>
      )
    }
  </li>
  
);

export default connect(
  (state, { id }) => ({
    ...selectors.getUser(state, id),
  }),
  (dispatch, { id }) => ({
    onDelete() {
      dispatch(actions.removeUser(id));
    },
  }),
)(User);
