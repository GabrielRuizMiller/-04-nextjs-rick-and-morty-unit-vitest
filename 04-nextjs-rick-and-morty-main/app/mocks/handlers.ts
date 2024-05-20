import { http } from 'msw'
import { submitFeedbackSuccess } from './feedback'

export const handlers = [
  submitFeedbackSuccess
]
