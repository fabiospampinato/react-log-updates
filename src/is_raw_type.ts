
/* IS RAW TYPE */

function isRawType ( x ) {

  const type = typeof x;

  return type === 'string' || type === 'number' || type === 'boolean' || type === 'undefined' || x === null;

}

/* EXPORT */

export default isRawType;
