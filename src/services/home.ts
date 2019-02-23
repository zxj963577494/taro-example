import { request } from '@utils/request'

export async function queryHomes() {
  return request('https://jsonplaceholder.typicode.com/posts', {
    title: 'foo',
    body: 'bar',
    userId: 1,
  })
}
