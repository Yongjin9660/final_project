import { Link } from 'react-router-dom';

export function makeDirecLink(str) {
    var result = <Link to={{
        pathname: `/sort/director/${str}`,
        state : { 
            direc : str
        }
    }}>{str}</Link>

    return result;
}

export function makeActorLink(str) {
    var result = <Link to={{
        pathname: `/sort/actor/${str}`,
        state : { 
            actor : str
        }
    }}>{str}</Link>

    return result;
}

export function makeGenreLink(str) {
    var result = <Link to={{
        pathname: `/sort/genre/${str}`,
        state : { 
            genre : str
        }
    }}>{str}</Link>

    return result;
}

export function makeUserLink(str) {
    var result = <Link to={{
        pathname: `/sort/user/${str}`,
        state : { 
            user : str
        }
    }}>{str}</Link>

    return result;
}
export function makeTitleLink(id, str) {
    var result = <Link to={{
        pathname: `/review/${id}`,
        state : { 
            content_id : id
                        
        }
    }}>{str}</Link>

    return result;
}

export default {
    makeDirecLink,
    makeActorLink,
    makeGenreLink,
    makeUserLink,
    makeTitleLink
}