export function finalMugs(mugs) {
    if (mugs === 0) {
        return 'bummer';
    }
    else if (mugs < 30) {
        return 'notBad';
    } 
    return 'loaded';
}

export function finalHp(hp) {
    if (hp === 0) {
        return 'dead';
    }
    else if (hp < 20) {
        return 'justMadeIt';
    }
    return 'healthy';
}


