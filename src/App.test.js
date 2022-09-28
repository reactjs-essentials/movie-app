import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'

  test('render navigation', async () => {

    render(<App/>, {wrapper: BrowserRouter})

    const user = userEvent.setup()

    expect(screen.getByText("New film")).toBeInTheDocument()
    
    setTimeout(() => {
        expect(screen.getByText("Film list")).toBeInTheDocument()
      }, 5000);


    await user.click(screen.getByText("New film"))
    
    expect(screen.getByText("Add new film")).toBeInTheDocument()

    })