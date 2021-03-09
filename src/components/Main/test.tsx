import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('slould render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot(`
      <main>
        <h1>
          react avançado
        </h1>
      </main>
    `)
  })
})
