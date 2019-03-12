
import dataProxy, {ACTION, DOMAIN} from "../data/data-proxy";

export default (login) => {
    return dataProxy({action: ACTION.read, domain: DOMAIN.user, payload: { login }})
} 