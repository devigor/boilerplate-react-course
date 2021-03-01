import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render a heading', () => {
    render(<Main />) // renderizando o elemento

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
