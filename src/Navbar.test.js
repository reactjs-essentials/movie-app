import {render, screen} from '@testing-library/react'
import React from 'react'
import { createMemoryHistory } from "history";
import '@testing-library/jest-dom'
import NavBar from './NavBar'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'


    test('render navbar', async () => {
    const component = render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>)
    expect(component.getByText("Films")).toBeInTheDocument();
    
  })

    test('render navbar', async () => {
    const component = render(<NavBar />, {wrapper: BrowserRouter})
    //<nav></nav>  -- > navigation Role
    //<ul></ul> --> list Role
    expect(component.getByRole("list")).toBeInTheDocument();
    
  })
