declare class Counters {
    counters: {};
    count(name: any): void;
    log(collapsed?: boolean): void;
    logDebounced: any;
}
export default Counters;
