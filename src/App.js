import React, { Component } from 'react';
import { compose } from 'redux';
// import logo from './logo.svg';
import { connect } from 'react-redux';
// import { greet } from './actions';
import './App.css';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

export const App = props => {
  const { classes } = props;
  console.log(props.isMorning);
  return (
     <div className="App">
       <header className="App-header">
         {/*
           <img src={logo} className="App-logo" alt="logo" />
           */}
           <h1 className="App-title">{props.greeting}</h1>
         </header>
         <p className="App-intro">
           To get started, edit <code>src/App.js</code> and save to reload.
         </p>
         <Button variant="raised" className={classes.button} onClick={props.changeTurn}>
           change
         </Button>
         <Button variant="raised" className={classes.button} onClick={props.reset}>
           reset
         </Button>
       </div>
  )
}
export default compose(
 connect(
   ({changeTurn, isMorning, greeting, user}) => ({
     changeTurn,
     isMorning,
     greeting,
     user,
   }),
   dispatch => ({
     reset: () => dispatch({ type: 'RESET' }),
     changeTurn: () => dispatch({ type: 'CHANGE_TURN' }),
   }),
 ),
 withStyles(styles),
)(App);
