import { rest } from 'msw'

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, name: 'foo' },
        { id: 2, name: 'bar' },
        { id: 3, name: 'baz' },
      ])
    )
  })
]