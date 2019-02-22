import { request } from '@utils/request'

export async function queryExamples() {
  return request('https://jsonplaceholder.typicode.com/posts', {
    title: 'foo',
    body: 'bar',
    userId: 1,
  })
}
