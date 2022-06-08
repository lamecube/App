require('dotenv').config()
const bcrypt = require('bcrypt')
const HashFactor = 8
const URL = process.env.ROOT_URL;

const createRootUser = () => ({
	email:  URL ? `root@${URL}` : 'root',
	password: bcrypt.hashSync('test', HashFactor),
})

exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('users')
		.del()
		.then(function () {
			const fakeUsers = [
				createRootUser()
			]

			// Inserts seed entries
			return knex('users').insert(fakeUsers)
		})
}
