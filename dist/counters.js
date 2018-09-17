"use strict";
/* IMPORT */
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
/* COUNTERS */
var Counters = /** @class */ (function () {
    function Counters() {
        this.counters = {};
        this.logDebounced = _.debounce(this.log, 100);
    }
    Counters.prototype.count = function (name) {
        if (!this.counters[name])
            this.counters[name] = 0;
        this.counters[name] += 1;
    };
    Counters.prototype.log = function (collapsed) {
        var _this = this;
        if (collapsed === void 0) { collapsed = true; }
        var counter = _.sum(Object.values(this.counters)), group = collapsed ? console.groupCollapsed : console.group;
        group(counter + " Updates");
        _.orderBy(Object.keys(this.counters), [function (name) { return _this.counters[name]; }, _.identity], ['desc', 'asc']).forEach(function (name) {
            console.log(name + " " + _this.counters[name]);
        });
        console.groupEnd();
        this.counters = {};
    };
    return Counters;
}());
/* EXPORT */
exports.default = Counters;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY291bnRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFlBQVk7O0FBRVosMEJBQTRCO0FBRTVCLGNBQWM7QUFFZDtJQUFBO1FBRUUsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQTZCZCxpQkFBWSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUUsQ0FBQztJQUU5QyxDQUFDO0lBN0JDLHdCQUFLLEdBQUwsVUFBUSxJQUFJO1FBRVYsSUFBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFM0IsQ0FBQztJQUVELHNCQUFHLEdBQUgsVUFBTSxTQUFnQjtRQUF0QixpQkFpQkM7UUFqQkssMEJBQUEsRUFBQSxnQkFBZ0I7UUFFcEIsSUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBRyxNQUFNLENBQUMsTUFBTSxDQUFHLElBQUksQ0FBQyxRQUFRLENBQUUsQ0FBRSxFQUNuRCxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBRWpFLEtBQUssQ0FBTSxPQUFPLGFBQVUsQ0FBRSxDQUFDO1FBRS9CLENBQUMsQ0FBQyxPQUFPLENBQUcsTUFBTSxDQUFDLElBQUksQ0FBRyxJQUFJLENBQUMsUUFBUSxDQUFFLEVBQUUsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQW5CLENBQW1CLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFFLENBQUMsT0FBTyxDQUFHLFVBQUUsSUFBWTtZQUU5SCxPQUFPLENBQUMsR0FBRyxDQUFNLElBQUksU0FBSSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBRyxDQUFFLENBQUM7UUFFbkQsQ0FBQyxDQUFDLENBQUM7UUFFTCxPQUFPLENBQUMsUUFBUSxFQUFHLENBQUM7UUFFbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFFckIsQ0FBQztJQUlILGVBQUM7QUFBRCxDQUFDLEFBakNELElBaUNDO0FBRUQsWUFBWTtBQUVaLGtCQUFlLFFBQVEsQ0FBQyJ9