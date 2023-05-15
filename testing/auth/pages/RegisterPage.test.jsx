import { fireEvent, render, screen } from "@testing-library/react"
import { RegisterPage } from "../../../src/auth/pages/RegisterPage"
import { Provider, useDispatch } from "react-redux"
import { journalSlice } from "../../../src/store/journal"
import { configureStore } from "@reduxjs/toolkit"
import { MemoryRouter } from "react-router-dom"
import { startCreatingUserWithEmailPassword } from "../../../src/store/auth/thunks"
import { notAuthenticatedState } from "../../fixtures/authFixtures"
const mockStartCreatingUserWithEmailPassword=jest.fn()
jest.mock("../../../src/store/auth/thunks",()=>({
  ...jest.requireActual("../../../src/store/auth/thunks"),
  startCreatingUserWithEmailPassword:({
    email,
    password,
    displayName,
  })=>mockStartCreatingUserWithEmailPassword({
    email,
    password,
    displayName,
  })
}))
const mockUseDispatch=jest.fn()
jest.mock("react-redux",()=>({
  ...jest.requireActual("react-redux"),
  useDispatch:()=>mockUseDispatch
}))

const store=configureStore({
  reducer:{
    auth:journalSlice.reducer
  },
  preloadedState:{
    auth:notAuthenticatedState
  }
})

describe('pruebas en RegisterPage', () => { 
  test('debe mostrar el componente correctamente', () => {
    //  render(
    //     <Provider store={store}>
    //       <MemoryRouter>
    //         <RegisterPage/>
    //       </MemoryRouter>
    //     </Provider>
    //   )
    //   const title= screen.getByLabelText('title')
    //   expect(title.innerHTML).toBe('Crear cuenta')
  })

  test('debe llamar el startCreatingUserWithEmailPassword al hacer submit', () => {
    const user={
      password: "123456",
      email: "demo@google.com",
      displayName: "Demo User",
    }
    render(
      <Provider store={store}>
        <MemoryRouter>
          <RegisterPage/>
        </MemoryRouter>
      </Provider>
    )
    const displayNameInput= screen.getByRole('textbox',{name:'Nombre completo'})
    const emailInput= screen.getByRole('textbox',{name:'Correo'})
    const passwordInput= screen.getByLabelText('password')
    const form = screen.getByLabelText('form')

    fireEvent.change(displayNameInput,{target:{name:'displayName',value:user.displayName}})
    fireEvent.change(emailInput,{target:{name:'email',value:user.email}})
    fireEvent.change(passwordInput,{target:{name:'password',value:user.password}})

    fireEvent.submit(form)

    expect(mockUseDispatch ).toHaveBeenCalledWith(mockStartCreatingUserWithEmailPassword(user))
  })
  
  
})