export function randomizer(min:number, max:number,ciel:Boolean) {
    if (ciel) {
        return Math.ceil(min+Math.random()*(max-min));
    }
    return Math.floor(min+Math.random()*(max-min ));
}