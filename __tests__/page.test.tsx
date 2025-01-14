import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import HomePage from '@/app/page'
import { describe, it } from 'node:test'
 
describe('HomePage', () => {
  it('renders a heading', () => {
    render(<HomePage />)
 
    const elem = screen.getByText('Nilaa')
 
    expect(elem).toBeInTheDocument()
  })
})