const User = function(name) {
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send: function(message, to) {
        this.chatroom.send(message, this, to);
    },
    recieve: function(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`)
    }
}

const Chatroom = function() {
    let users = {} // list of users

    return {
        register: function(user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(message, from, to) {
            if(to) {
                to.recieve(message, from);
            } else {
                for(ket in users) {
                    if(users[key] !== from) {
                        users[key].recieve(message, from);
                    }
                }
            }
        }
    }
}

const dan = new User('Dan');
const john = new User('John');
const dave = new User('Dave');

const chatroom = new Chatroom();

chatroom.register(dan);
chatroom.register(john);
chatroom.register(dave);

dan.send('Hello Jeff', john);