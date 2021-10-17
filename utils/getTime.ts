export const getTime: any = (seconds: number = 0) => {
    console.log(seconds, 'seconds');
    let hours = 0,
        min = 0,
        sec = seconds;

    if (sec < 60) {
        return `${hours < 10 ? '0' + hours : hours}:${min < 10 ? '0' + min : min}:${
            sec < 10 ? '0' + sec : sec
        }`;
    } else if (sec === 60) {
        if (min === 59) {
            hours = hours + 1;
            min = sec = 0;
            if (hours === 24) {
                hours = min = sec = 0;
                return getTime();
            }
            return getTime();
        }
        min = min + 1;
        sec = 0;
        return getTime();
    }
};
