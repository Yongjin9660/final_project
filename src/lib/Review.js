import { Link } from 'react-router-dom';

export function makeDirecLink(str) {
    var result = <Link to={{
        pathname: `/sort/director/${str}`
    }}>{str}</Link>

    return result;
}

export function makeActorLink(str) {
    var result = <Link to={{
        pathname: `/sort/actor/${str}`
    }}>{str}</Link>

    return result;
}

export function makeGenreLink(str) {
    var result = <Link to={{
        pathname: `/sort/genre/${str}`
    }}>{str}</Link>

    return result;
}

export default {
    makeDirecLink,
    makeActorLink,
    makeGenreLink
}