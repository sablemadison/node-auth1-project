

function find() {
    return db('users');
}

function findById(id) {
    return db('users').where('id', id).first();
}

function add(user) {
    db('users').insert(user).then(ids => {
        return findById(ids[0]);
      });
    }


function update(changes, id) {
}

function remove(id) {
}

module.exports = {
    find,
    findById,
    add
}
