import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

const store = setupStore()

test('renders homepage', () => {
  render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
    );
  const linkElement = screen.getByTestId('homepage');
  expect(linkElement).toBeInTheDocument();
});
