
/* GET DEVTOOLS HOOK */

function getDevToolsHook () {

  if ( typeof window !== 'undefined' ) return window['__REACT_DEVTOOLS_GLOBAL_HOOK__'];

  if ( typeof global !== 'undefined' ) return global['__REACT_DEVTOOLS_GLOBAL_HOOK__'];

}

/* EXPORT */

export default getDevToolsHook;
