import { User } from '../user.model'
// import mongoose from 'mongoose'

describe('User model', () => {
  describe('schema', () => {
    test('name', () => {
      const name = User.schema.obj.name
      expect(name).toEqual({
        type: String,
        required: true,
        trim: true,
        maxlength: 50
      })
    })

    test('email', () => {
      const email = User.schema.obj.email
      expect(email).toEqual({
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
        unique: true
      })
    })
  })
})
