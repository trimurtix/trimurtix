import seeder from '@cleverbeagle/seeder'
import { Meteor } from 'meteor/meteor'

// Seeder Users
seeder(Meteor.users, {
  environments: ['development', 'staging'],
  noLimit: true,
  data: [{
    email: 'admin@admin.com',
    password: 'password',
    profile: {
      firstName: 'João',
      lastName: 'Pereira',
      phone: '(11) 9922-1156'
    },
    roles: ['admin']
  }],
  modelCount: 5,
  model(index, faker) {
    const userCount = index + 1
    return {
      email: `usuario+${userCount}@test.com`,
      password: 'senha',
      profile: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName()
      },
      roles: ['developer']
    }
  }
})