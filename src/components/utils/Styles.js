const StylesUtils = {};

function testCommon(key) {
    return !(key.indexOf(':') > 0);
}

function getPseudoClass(key) {
    const pseudo = key.split(':');
    return pseudo[0];
}

function getPseudoClassProperty(key) {
    const property = key.split(':');
    return property[1];
}

function makeCommon(properties) {
    const common = Object
        .entries(properties)
        .reduce((previous, current) => {
            if (testCommon(current[0]))
                return `${previous}${current[0]}: ${current[1]};`
            return previous;
        }, '');
    return common;
}

function createPseudo(pseudo) {
    class _pseudo {
        constructor(pseudo) {
            this.pseudo = pseudo;
            this.values = {};
        }
        add (key, value) {
            this.values[key] = value;
        }
    }
    return new _pseudo(pseudo);
}

function addPseudo(pseudoObject, pseudoKey, pseudoPropertyValue) {
    const pseudo = getPseudoClass(pseudoKey);
    const prop = getPseudoClassProperty(pseudoKey);
    let _p = pseudoObject[pseudo];
    if (!_p) _p = createPseudo(pseudo);
    _p.add(prop, pseudoPropertyValue);
    pseudoObject[pseudo] = _p;
}

function buildPseudo(properties) {
    const _pseudo = Object
        .entries(properties)
        .reduce((previous, current) => {
            if (!testCommon(current[0]))
                addPseudo(previous, current[0], current[1]);
            return previous;
        }, {});
    return _pseudo;
}

function buildStringForPseudo(pseudoObject) {
    
    const pseudo = Object
        .values(pseudoObject)
        .map(value => {
            return {
                key: `&:${value.pseudo}`,
                props: Object
                    .entries(value.values)
                    .reduce((previous, current) => `${previous}${current[0]}:${current[1]};`) 
            }
        })
        .reduce((previous, current) => {
            return `${previous}${current.key} { ${current.props[0]}:${current.props[1]} };`
        }, '');
    return pseudo;
}

function makePseudoClasses(properties) {
    const _pseudo = buildPseudo(properties);
    return buildStringForPseudo(_pseudo);
}

StylesUtils.makeStylesTextFromProperties = properties => {
    return makeCommon(properties) + makePseudoClasses(properties);
}

export default StylesUtils;