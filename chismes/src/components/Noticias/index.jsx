import React from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';

import * as selectors from '../../reducers';
import * as actions from '../../actions/users';
import './index.css';


const Noticias = ({ Titulo, lastName, chisme, email, isConfirmed, onDelete }) => (
  
  <div>
    <h5>
    { 'Chisme :  ' }
    { Titulo }
    { '                                               ' }
    {
      !isConfirmed && (
        <Spinner name="ball-beat" color="purple"/>
      )
    }
    </h5>
    <h6>
    { '17/10/2018 :  ' }
    { chisme }
    { '                                               ' }
    {
      !isConfirmed && (
        <Spinner name="ball-beat" color="purple"/>
      )
    }
    
    </h6>
    
  </div>
  
    
  
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
)(Noticias);
