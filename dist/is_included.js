"use strict";
/* IS INCLUDED */
Object.defineProperty(exports, "__esModule", { value: true });
function isIncluded(str, includeRe, excludeRe) {
    if (includeRe && !includeRe.test(str))
        return false;
    return !excludeRe || !excludeRe.test(str);
}
/* EXPORT */
exports.default = isIncluded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNfaW5jbHVkZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaXNfaW5jbHVkZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGlCQUFpQjs7QUFFakIsU0FBUyxVQUFVLENBQUcsR0FBRyxFQUFFLFNBQVUsRUFBRSxTQUFVO0lBRS9DLElBQUssU0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBRyxHQUFHLENBQUU7UUFBRyxPQUFPLEtBQUssQ0FBQztJQUV6RCxPQUFPLENBQUMsU0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBRyxHQUFHLENBQUUsQ0FBQztBQUUvQyxDQUFDO0FBRUQsWUFBWTtBQUVaLGtCQUFlLFVBQVUsQ0FBQyJ9