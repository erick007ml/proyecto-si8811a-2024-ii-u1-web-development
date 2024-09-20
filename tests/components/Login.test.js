import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Login from '../../src/pages/Login'

delete window.location
window.location = { href: '' }

describe('Componente de Login', () => {
  test('renderiza el componente correctamente', () => {
    render(<Login />)

    const imagenLogo = screen.getByAltText('User Avatar')
    expect(imagenLogo).toBeTruthy()
    expect(imagenLogo.src).toBe(
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWIWSZx522tAelmtZH81mS1nOZ-_2uwtjr4VLY1qZf7tvuJ08obXkMmA0nCG7PhcLTdz3faWCeBGuxw1expsuXiH0J2i4Kpol7NKQu0NXFACoUuPWJ1w9xG1H751VmMytQ62klNnSCnPM/s400/logo-juegosflorales.png'
    )

    const encabezadoLogin = screen.getByText('Login')
    expect(encabezadoLogin).toBeTruthy()

    const descripcionLogin = screen.getByText(
      'Ingresa haciendo uso de tu correo universitario upt.pe'
    )
    expect(descripcionLogin).toBeTruthy()

    const botonMicrosoft = screen.getByRole('button', {
      name: /Iniciar con Microsoft/i,
    })
    expect(botonMicrosoft).toBeTruthy()
  })

  test('al hacer clic en el botón redirige a la URL de login', () => {
    render(<Login />)

    const botonMicrosoft = screen.getByRole('button', {
      name: /Iniciar con Microsoft/i,
    })
    fireEvent.click(botonMicrosoft)

    expect(window.location.href).toBe('http://localhost:5000/login')
  })
})
