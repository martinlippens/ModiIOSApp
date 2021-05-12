/**
 * Returns date in words "June 1 2020"
 *
 * @param date {Date} date to format
 */

import moment from 'moment';

export const dateAsWords = (date, options) => {
    if (!options) {
        options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    }
    let formattedDate;
    const initialDate = new Date(date);
    try {
        formattedDate = initialDate.toLocaleDateString('en-US', options)
    } catch (err) {
        console.error("error => ", err);
    }
    return formattedDate;
}

export const processedDate = (date, options) => {
    let newDate = dateAsWords(date, options).toString();
    if (newDate === "Invalid Date") {
        newDate = date.substr(0, 10);
    } else if (newDate.indexOf("+0000") !== -1) {
        newDate = newDate.substr(0, 10);
    }
    return newDate;
}

export const createdDate = (date, options) => {
    const d1 = moment(date);
    const today = moment().toDate();
    const diff = moment(today).diff(d1, 'days');

    if (!options) {
        options = { year: 'numeric', month: 'short', day: 'numeric' }
    }
    if (diff > 2) {
        return moment(date).format("MMM Do YYYY");
        // let newDate = dateAsWords(date, options).toString();
        // if (newDate === "Invalid Date") {
        //     newDate = date.substr(0, 10);
        // } else if (newDate.indexOf("+0000") !== -1) {
        //     newDate = newDate.substr(0, 10);
        // }
        // return newDate;
    } else if (diff === 2) {
        return "2 days ago"
    } else if (diff === 1) {
        return "yesterday"
    } else {
        const duration = moment.duration(moment(today).diff(d1));
        const hours = parseInt(duration.asHours());
        const minutes = parseInt(duration.asMinutes()) - hours * 60;

        if (hours > 1) {
            return `${hours} hours ago`;
        } else if (hours === 1) {
            return `${hours} hour ago`;
        } else if (minutes > 0) {
            if (minutes === 1) {
                return `${minutes} minute ago`;
            }
            return `${minutes} minutes ago`;
        } else {
            return 'Now'
        }
    }
}
