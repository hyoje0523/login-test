"use strict";

// const fs = require("fs").promises;

const db = require("../config/db");

class UserStorage {
    //# = private = 데이터 은닉화
    // static #getUserInfo(data, id) {
    //     const users = JSON.parse(data);
    //     const idx = users.id.indexOf(id);
    //     const usersKeys = Object.keys(users);
    //     const userInfo = usersKeys.reduce((newUser, info) => {
    //         newUser[info] = users[info][idx];
    //         return newUser;
    //     }, {});

    //     return userInfo;
    // }

    // static #getUsers(data, isAll, fields) {
    //     const users = JSON.parse(data);
    //     if(isAll) return users;
    //     const newUsers = fields.reduce((newUsers, field) => {
    //         if(users.hasOwnProperty(field)) {
    //             newUsers[field] = users[field];
    //         }
    //         return newUsers;
    //     }, {});

    //     return newUsers;
    // }

    //... = parameter를 배열화
    static getUsers(isAll, ...fields) {
        

        // const users = this.#users;

        // return fs
        //     .readFile("./src/databases/users.json")
        //     .then((data) => {
        //         return this.#getUsers(data, isAll, fields);
        //     })
        //     .catch(console.error);

    }

    static getUserInfo(id) {
        const query = "SELECT * FROM users WHERE id = ?;";
        return new Promise((resolve, reject) => {
            db.query(query, [id], (err, data) => {
                if(err) reject(err);
                resolve(data[0]);
            });
        });

        // const users = this.#users;
        // return fs
        //     .readFile("./src/databases/users.json")
        //     .then((data) => {
        //         return this.#getUserInfo(data, id);
        //     })
        //     .catch(console.error);

    }

    static async save(userInfo) {
        const query = "INSERT INTO users (id, password, name) VALUES(?, ?, ?);";
        return new Promise((resolve, reject) => {
            db.query(query, [userInfo.id, userInfo.password, userInfo.name], (err) => {
                if(err) reject(new Error("중복된 아이디입니다"));
                resolve({success: true});
            });
        });

        // const users = await this.getUsers(true);
        // if(users.id.includes(userInfo.id)) {
        //     throw "이미 존재하는 아이디입니다.";
        // }

        // users.id.push(userInfo.id);
        // users.password.push(userInfo.password);
        // users.names.push(userInfo.name);
        // fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        // return {success: true};        
    }
}

module.exports = UserStorage;