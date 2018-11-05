
/* IMPORT */

import extend = require ( 'lodash/extend' );
import Counters from './counters';
import getDevToolsHook from './get_devtools_hook';
import isIncluded from './is_included';
import isRawType from './is_raw_type';

/* LOG UPDATES */

const defaultOptions = {
  enabled: false,
  collapsed: true
  // include: /foo|bar/i
  // exclude: /baz/i
};

function logUpdates ( options ) {

  options = extend ( {}, defaultOptions, options );

  if ( !options.enabled ) return;

  const hook = getDevToolsHook ();

  if ( !hook ) return;

  const counters = new Counters ();

  hook.sub ( 'update', event => {

    const type = event.data.type;

    if ( isRawType ( type ) ) return;

    const name = ( event.data.name !== 'TODO_NOT_IMPLEMENTED_YET' ) ? event.data.name : type.name || 'Anonymous';

    if ( !isIncluded ( name, options.include, options.exclude ) ) return;

    counters.count ( name );

    counters.logDebounced ( options.collapsed );

  });

}

/* EXPORT */

export = Object.assign ( logUpdates, { default: logUpdates } );
