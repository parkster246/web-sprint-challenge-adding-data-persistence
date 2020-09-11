
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('name')
        .notNullable();
        tbl.string('project_description')
        .notNullable();
        tbl.boolean('project_completed')
        .defaultTo('false')
        .notNullable();

    })
    .createTable('tasks' , tbl => {
        tbl.increments();
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        tbl.text('task_description')
        .notNullable();
        tbl.text('notes');
        tbl.boolean('task_completed')
        .defaultTo('false')
        .notNullable();

    })
    .createTable('resource_list' , tbl => {
        tbl.increments();
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resource')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.text('name')
        .unique()
        .notNullable();
        tbl.text('description')

    })

};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resource_list')
    .dropTableIfExists('resources')
};