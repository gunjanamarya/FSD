'use strict';

module.exports = function (app) {
    var services = require('../controllers/Controller')

    app.route('/get-users')
        .get(services.get_users)

    app.route('/add-user')
        .post(services.add_user)
}