import { render, screen } from '@testing-library/react'
import App from './App'

describe('<App />', () => {
  it('should render my app correctly', () => {
    render(<App />)

    expect(screen.getByText('Vite + React')).toBeInTheDocument()
  })
})
