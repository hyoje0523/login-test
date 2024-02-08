"use strict";

class UserStorage {
    //# = private = 데이터 은닉화
    static #users = {
        id: ["hyoje0523", "playee0523"],
        password: ["1234", "4567"],
        names: ["효제", "test"],
    };

    //... = parameter를 배열화
    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});

        return newUsers;
    }
}

module.exports = UserStorage;