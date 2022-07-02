import React from 'react';
import SuperButton from './components/common/SuperButton/SuperButton';
import { useAppDispatch, useAppSelector } from './customHooks/redux.hooks';
import { userSlice } from './store/slices/ConstructorSlice';
import './global.css'

function App(): JSX.Element {

  const { testText } = useAppSelector(
    (state) => state.constructorReducer
  )

  const { changeTestText } = userSlice.actions

  const dispatch = useAppDispatch()

  const handleChangeText = () => {
    dispatch(changeTestText(Date.now().toString()))
  }

  return (
    <div className="App" data-testid='homepage'>
      <div>
        <SuperButton>Create div</SuperButton>
        <hr className='rule' />
      </div>
    </div>
  );
}

export default App;
