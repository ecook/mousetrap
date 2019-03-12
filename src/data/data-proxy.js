import dataAccess from "./data-localstorage";

export default (request) => {
    return dataAccess(request);
}

export const ACTION = {
    create: 1,
    read: 2,
    update: 3,
    delete: 4
}

export const DOMAIN = {
    user: 1,
    post: 2
}