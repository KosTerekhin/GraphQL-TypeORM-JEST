import { host } from './constants'
import { request } from 'graphql-request'
import gql from 'graphql-tag';
import { typeormConnection } from '../../typeormConnection';

const mutation = gql`
    mutation {
      register(email: "bob@bob.com", password: "123456")
    }
`

const beforeAll = async () => {
  await typeormConnection()
}

test('Register', async () => {
  await beforeAll()
  const res = await request(host, mutation)
  expect(res).toEqual({ register: true })
  return true
})