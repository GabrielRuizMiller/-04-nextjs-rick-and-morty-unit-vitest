import { http } from 'msw';

export const submitFeedbackSuccess = http.post('/api/feedback', (info) => {
  const feedbackResponse = {
    name: 'Test Name',
    subject: 'Subject Test',
    comments: 'Test comments',
    status: 'Success'
  };
  return new Response(JSON.stringify(feedbackResponse), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
});