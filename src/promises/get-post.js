import dataProxy, {ACTION, DOMAIN} from "../data/data-proxy";

export default (id) => {
    return dataProxy({action: ACTION.read, domain: DOMAIN.post, payload: { post: {id} }})
} 