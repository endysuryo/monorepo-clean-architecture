import React from 'react'

import MainView from '../src/presentation/views/main'
import { render, screen } from '@testing-library/react'

describe('tests', () => {
  it('should', () => {
    render(<MainView />)
    expect(screen.getByText('Search')).toBeInTheDocument()
  })
})
