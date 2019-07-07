export default {
    clearFloat: `
        &:before,
        &after {
            content: " ";
            display: table;
        }
        &:after {
            clear: both;
        }
    `,
}