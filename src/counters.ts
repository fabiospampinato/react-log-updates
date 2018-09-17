
/* IMPORT */

import * as _ from 'lodash';

/* COUNTERS */

class Counters {

  counters = {};

  count ( name ) {

    if ( !this.counters[name] ) this.counters[name] = 0;

    this.counters[name] += 1;

  }

  log ( collapsed = true ) {

    const counter = _.sum ( Object.values ( this.counters ) ),
          group = collapsed ? console.groupCollapsed : console.group;

    group ( `${counter} Updates` );

    _.orderBy ( Object.keys ( this.counters ), [name => this.counters[name], _.identity], ['desc', 'asc'] ).forEach ( ( name: string ) => {

      console.log ( `${name} ${this.counters[name]}` );

    });

		console.groupEnd ();

    this.counters = {};

  }

  logDebounced = _.debounce ( this.log, 100 );

}

/* EXPORT */

export default Counters;
