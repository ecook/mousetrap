import users from "../data/users.json";

export default (login) => {
    return new Promise((resolve, reject) => {
        const found = users.find(u => u.login === login);

        if(found) {
            resolve(found);
        } else {
            reject(new Error("user not found"));
        }
    })
} 