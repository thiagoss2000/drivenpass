
export function newTitle(titleDb: any, title: string, text: string) {
    if (title) {
        if (titleDb.some(e => e.title === title)) throw {status: 409, message: "title exists"};
        return title;
    } else {
        for (let i = 0; i <= titleDb.length; i++){
            if (!titleDb.some(e => e.title === `${text} ${i}`)) return `${text} ${i}`
        }
        throw {status: 500, message: "self naming failed"}
    }
}