
/* IS INCLUDED */

function isIncluded ( str, includeRe?, excludeRe? ) {

  if ( includeRe && !includeRe.test ( str ) ) return false;

  return !excludeRe || !excludeRe.test ( str );

}

/* EXPORT */

export default isIncluded;
