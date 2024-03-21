


function user() {
    console.log("Iam the user");
}

function add(a, b) {
    console.log(a + b);
}

// user()

// module.exports = user

module.exports = {
    user: user,
    add: add
}