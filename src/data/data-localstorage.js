import users from "./users.json";
import {ACTION, DOMAIN} from "../data/data-proxy";

export default ({action, domain, payload}) => {
    return new Promise((resolve, reject) => {
        switch(domain) {
            case DOMAIN.user:
                //check if initialized
                if(!localStorage.hasOwnProperty(DOMAIN.user)) {
                    localStorage.user = JSON.stringify(users);
                }
                if(action === ACTION.read) {
                    const user = JSON.parse(localStorage.user);
                    const found = user.find(({login}) => login === payload.login);
                    if(found) {
                        resolve(found);
                    } else {
                        reject(new Error("user not found"))
                    }
                }
                break;
            default: reject(new Error("domain not found"))
        }
    })

}