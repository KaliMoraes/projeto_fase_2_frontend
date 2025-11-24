import { render, screen } from '@testing-library/react'
import SerieCreate from '../pages/SerieCreate'

test('renderiza formulário de cadastro', () => {
  render(<SerieCreate />)
  expect(screen.getByText(/Cadastrar nova série/i)).toBeInTheDocument()
})
