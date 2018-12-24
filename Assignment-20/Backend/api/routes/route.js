'use strict';

module.exports = function (app) {
    var services = require('../controllers/Controller');

    app.route('/get-users')
        .get(services.get_users)

    app.route('/add-user')
        .post(services.add_user)

    app.route('/add-file')
        .post(services.add_file)

    app.route('/get-files/:id')
        .get(services.get_files)

    app.route('/delete-file/:id')
        .delete(services.delete_file)

    app.route('/download-file')
        .post(services.download_file)
}