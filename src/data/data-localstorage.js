import users from "./users.json";
import posts from "./posts.json";
import {ACTION, DOMAIN} from "../data/data-proxy";

export default ({action, domain, payload}) => {
    return new Promise((resolve, reject) => {
        switch(domain) {
            case DOMAIN.user:
                //check if initialized
                if(!localStorage.hasOwnProperty("user")) {
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
            case DOMAIN.post:
                //check if initialized
                if(!localStorage.hasOwnProperty("post")) {
                    localStorage.post = JSON.stringify(posts);
                }
                if(action === ACTION.read) {
                    const post = JSON.parse(localStorage.post);
                    if(payload.showAll) {
                        resolve(post);
                    } else {
                        const found = post.find(({id}) => id === payload.post.id);
                        if(found) {
                            resolve(found);
                        } else {
                            reject(new Error("post not found"))
                        }  
                    }
                }
                break;

            default: reject(new Error("domain not found"))
        }
    })

}