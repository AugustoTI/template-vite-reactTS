import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import App from './App'

describe('<App />', () => {
  it('should render my app correctly', () => {
    render(<App />)

    const text = screen.getByText('Vite + React')

    expect(text).toBeInTheDocument()
  })

  it('should call the function when clicking the button', () => {
    render(<App />)

    const button = screen.getByTestId('btn')
    const mockFn = vi.fn()

    button.onclick = mockFn

    fireEvent.click(button)

    expect(mockFn).toHaveBeenCalled()
  })
})
