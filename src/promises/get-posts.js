import dataProxy, {ACTION, DOMAIN} from "../data/data-proxy";

export default () => {
    return dataProxy({action: ACTION.read, domain: DOMAIN.post, payload: { showAll: true }})
} 