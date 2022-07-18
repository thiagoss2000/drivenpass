export function newTitle(titleDb, title, text) {
    if (title) {
        if (titleDb.some(function (e) { return e.title === title; }))
            throw { status: 409, message: "title exists" };
        return title;
    }
    else {
        var _loop_1 = function (i) {
            if (!titleDb.some(function (e) { return e.title === "".concat(text, " ").concat(i); }))
                return { value: "".concat(text, " ").concat(i) };
        };
        for (var i = 0; i <= titleDb.length; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        throw { status: 500, message: "self naming failed" };
    }
}
