import React from 'react';
import SuperButton from './components/common/SuperButton/SuperButton';
import { useAppDispatch, useAppSelector } from './customHooks/redux.hooks';
import { userSlice } from './store/slices/ConstructorSlice';
import './global.css'
import Div from './components/Div/Div';

function App(): JSX.Element {

  const { divCreated } = useAppSelector(
    (state) => state.constructorReducer
  )

  const { createDiv, removeDiv } = userSlice.actions

  const dispatch = useAppDispatch()

  const handleCreateDiv = () => {
    dispatch(createDiv())
  }

  const handleResetStyles = () => {
    // dispatch(createDiv())
  }

  const handleRemoveDiv = () => {
    dispatch(removeDiv())
  }

  return (
    <div className="App" data-testid='homepage'>
      <div>
        <SuperButton onClick={handleCreateDiv} disabled={divCreated}>Create div</SuperButton>
        <SuperButton onClick={handleResetStyles} disabled>Reset styles</SuperButton>
        <SuperButton onClick={handleRemoveDiv} disabled={!divCreated}>Remove div</SuperButton>
        <hr className='rule' />
        { divCreated && (
          <Div divCreated={divCreated}>Hello, i'm a div</Div>
        ) }
      </div>
    </div>
  );
}

export default App;
