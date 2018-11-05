
/* IMPORT */

import debounce = require ( 'lodash/debounce' );
import identity = require ( 'lodash/identity' );
import orderBy = require ( 'lodash/orderBy' );
import sum = require ( 'lodash/sum' );

/* COUNTERS */

class Counters {

  counters = {};

  count ( name ) {

    if ( !this.counters[name] ) this.counters[name] = 0;

    this.counters[name] += 1;

  }

  log ( collapsed = true ) {

    const counter = sum ( Object.values ( this.counters ) ),
          group = collapsed ? console.groupCollapsed : console.group;

    group ( `${counter} Updates` );

    orderBy ( Object.keys ( this.counters ), [name => this.counters[name], identity], ['desc', 'asc'] ).forEach ( ( name: string ) => {

      console.log ( `${name} ${this.counters[name]}` );

    });

		console.groupEnd ();

    this.counters = {};

  }

  logDebounced = debounce ( this.log, 100 );

}

/* EXPORT */

export default Counters;
