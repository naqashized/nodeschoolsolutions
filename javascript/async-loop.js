/**
 * Async Loop solution
 */
function loadUsers(userIds, load, done) {
    var all = 0
    var users = []
    
    userIds.reduce(function(element, index) {
        load(element, function(user) {
            users[index] = user
            ++all;
            if (all === userIds.length)
                return done(users)
        })});
}

module.exports = loadUsers