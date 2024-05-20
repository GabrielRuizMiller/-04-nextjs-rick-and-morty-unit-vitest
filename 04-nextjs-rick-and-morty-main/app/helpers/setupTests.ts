import '@testing-library/jest-dom/vitest'
import { afterAll, beforeAll, afterEach } from 'vitest'
import { server } from '../mocks/server'

beforeAll(() => server.listen({
  onUnhandledRequest: 'bypass'
}))

afterEach(() => server.resetHandlers())

afterAll(() => server.close())