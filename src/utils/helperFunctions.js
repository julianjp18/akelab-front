const numOnly = (value) => value && `${value}`.replace(/[^0-9.]/g, '');

export {
    numOnly
};