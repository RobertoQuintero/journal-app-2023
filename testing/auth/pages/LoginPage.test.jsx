import { fireEvent, render, screen } from "@testing-library/react"
import { LoginPage } from "../../../src/auth/pages/LoginPage"
import { Provider, useDispatch } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { authSlice} from "../../../src/store/auth"
import { startGoogleSignIn, startLoginEmailPassword } from "../../../src/store/auth/thunks"
import { MemoryRouter } from "react-router-dom"
import { notAuthenticatedState } from "../../fixtures/authFixtures"

const mockedStartGoogleSignIn= jest.fn()
const mockedStartLoginEmailPassword= jest.fn()
jest.mock("../../../src/store/auth/thunks",()=>({
  ...jest.requireActual("../../../src/store/auth/thunks"),
  startGoogleSignIn:()=>mockedStartGoogleSignIn,
  startLoginEmailPassword:({email,password})=>mockedStartLoginEmailPassword({email,password})
}))
// return ()=> mockedStartLoginEmailPassword({email,password})

const mockUseDispatch= jest.fn()
jest.mock("react-redux",()=>({
  ...jest.requireActual("react-redux"),
  useDispatch:()=>mockUseDispatch
  // useDispatch:()=>(fn)=>fn()
  
}))
 
const store=configureStore({
  reducer:{
    auth:authSlice.reducer
  },
  preloadedState:{
    auth:notAuthenticatedState
  }
})
describe('Pruebas en LoginPage', () => { 
  beforeEach(()=>jest.clearAllMocks())
  test('debe mostar el componente correctamente', () => {

    // render(
    //   <Provider store={store}>
    //     <MemoryRouter>
    //       <LoginPage/>
    //     </MemoryRouter>
    //   </Provider>
    // )

    // expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1)
    
  })

  test('should boton d google debe llamar el startGoogleSignin', () => {
    // render(
    //   <Provider store={store}>
    //     <MemoryRouter>
    //       <LoginPage/>
    //     </MemoryRouter>
    //   </Provider>
    // )

    // const googleBtn = screen.getByLabelText('google-btn')
    // fireEvent.click(googleBtn)
    // expect(mockedStartGoogleSignIn).toHaveBeenCalled()
  })
  
  test('debe llamar el dispatch con el startGoogleSignIn', () => {
    // render(
    //   <Provider store={store}>
    //     <MemoryRouter>
    //       <LoginPage/>
    //     </MemoryRouter>
    //   </Provider>
    // )

    // const googleBtn = screen.getByLabelText('google-btn')
    // fireEvent.click(googleBtn)
    // expect(mockUseDispatch).toHaveBeenCalledWith(startGoogleSignIn())
    
  })
  
  test('submit debe llamar el startLoginEmailPassword', () => {
    const email='carlos@google.com'
    const password='123456'
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage/>
        </MemoryRouter>
      </Provider>
    )

    const emailField=screen.getByRole('textbox',{name:'Correo'})
    fireEvent.change(emailField,{target:{name:'email',value:email}})

    const passwordField=screen.getByLabelText('password')
    fireEvent.change(passwordField,{target:{name:'password',value:password}})

    const form = screen.getByLabelText('submit-form')
    fireEvent.submit(form)

    expect(mockedStartLoginEmailPassword).toHaveBeenCalledWith({email,password})

  })

  
})