/**
 * Simple Date Converter
 * v.1.0.0
 * Takes date in format: DD-MM-YYYY:T:HH:MM:SS, and monthType: ["string", "numeric"]
 * Returns date in format: DD-M-YYYY, month as a Name if monthType = string
 * OR date in format: DD-MM-YYYY, month as a Month Order if monthType = numeric
 * USAGE:
 * ----------------------------------------
 *   dateConverter(date, 'monthType');
 */

export default function dateConverter(date, monthType = "string") {
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let time    = new Date(date);
    let year    = time.getUTCFullYear();
    let month   = months[time.getUTCMonth()];
    let day     = time.getDate();

    return monthType === "numeric" ? time.getUTCMonth().toString().length === 1 ? day + " - 0" + (time.getUTCMonth()) + " - " + year : day + " - 0" + (time.getUTCMonth()) + " - " + year : day + " - " + month + " - " + year;
}
