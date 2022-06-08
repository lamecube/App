exports.up = function (knex) {
	return knex.schema
		.createTable('app_schema', (col) => {
			col.increments()
			col.string('app_page_name', 256)
				.unique()
				.notNullable()
			col.string('app_page_route',256)
				.unique()
				.notNullable()
			col.boolean('app_page_match_exact_route')
				.unique()
				.defaultTo(1)
			col.string('app_page_object')
		})
}

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('app_schema')
}
