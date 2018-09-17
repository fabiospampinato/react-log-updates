"use strict";
/* IMPORT */
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var counters_1 = require("./counters");
var get_devtools_hook_1 = require("./get_devtools_hook");
var is_included_1 = require("./is_included");
var is_raw_type_1 = require("./is_raw_type");
/* LOG UPDATES */
var defaultOptions = {
    enabled: false,
    collapsed: true
    // include: /foo|bar/i
    // exclude: /baz/i
};
function logUpdates(options) {
    options = _.extend({}, defaultOptions, options);
    if (!options.enabled)
        return;
    var hook = get_devtools_hook_1.default();
    if (!hook)
        return;
    var counters = new counters_1.default();
    hook.sub('update', function (event) {
        var type = event.data.type;
        if (is_raw_type_1.default(type))
            return;
        var name = (event.data.name !== 'TODO_NOT_IMPLEMENTED_YET') ? event.data.name : type.name || 'Anonymous';
        if (!is_included_1.default(name, options.include, options.exclude))
            return;
        counters.count(name);
        counters.logDebounced(options.collapsed);
    });
}
/* EXPORT */
exports.default = logUpdates;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFlBQVk7O0FBRVosMEJBQTRCO0FBQzVCLHVDQUFrQztBQUNsQyx5REFBa0Q7QUFDbEQsNkNBQXVDO0FBQ3ZDLDZDQUFzQztBQUV0QyxpQkFBaUI7QUFFakIsSUFBTSxjQUFjLEdBQUc7SUFDckIsT0FBTyxFQUFFLEtBQUs7SUFDZCxTQUFTLEVBQUUsSUFBSTtJQUNmLHNCQUFzQjtJQUN0QixrQkFBa0I7Q0FDbkIsQ0FBQztBQUVGLFNBQVMsVUFBVSxDQUFHLE9BQU87SUFFM0IsT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUcsRUFBRSxFQUFFLGNBQWMsRUFBRSxPQUFPLENBQUUsQ0FBQztJQUVuRCxJQUFLLENBQUMsT0FBTyxDQUFDLE9BQU87UUFBRyxPQUFPO0lBRS9CLElBQU0sSUFBSSxHQUFHLDJCQUFlLEVBQUcsQ0FBQztJQUVoQyxJQUFLLENBQUMsSUFBSTtRQUFHLE9BQU87SUFFcEIsSUFBTSxRQUFRLEdBQUcsSUFBSSxrQkFBUSxFQUFHLENBQUM7SUFFakMsSUFBSSxDQUFDLEdBQUcsQ0FBRyxRQUFRLEVBQUUsVUFBQSxLQUFLO1FBRXhCLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRTdCLElBQUsscUJBQVMsQ0FBRyxJQUFJLENBQUU7WUFBRyxPQUFPO1FBRWpDLElBQU0sSUFBSSxHQUFHLENBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssMEJBQTBCLENBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksV0FBVyxDQUFDO1FBRTdHLElBQUssQ0FBQyxxQkFBVSxDQUFHLElBQUksRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUU7WUFBRyxPQUFPO1FBRXJFLFFBQVEsQ0FBQyxLQUFLLENBQUcsSUFBSSxDQUFFLENBQUM7UUFFeEIsUUFBUSxDQUFDLFlBQVksQ0FBRyxPQUFPLENBQUMsU0FBUyxDQUFFLENBQUM7SUFFOUMsQ0FBQyxDQUFDLENBQUM7QUFFTCxDQUFDO0FBRUQsWUFBWTtBQUVaLGtCQUFlLFVBQVUsQ0FBQyJ9