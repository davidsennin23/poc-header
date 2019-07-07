import React from 'react';

export function execureHOC(HOC, {...params}) {
    return <HOC {...params}/>
}