const DATE_UNITS = {
    years: 31536000,
    months: 2629800,
    days: 86400,
    hours: 3600,
    minutes: 60,
    second: 1
}

const rtf = new Intl.RelativeTimeFormat('es', { numeric: 'auto' });

const getRelativeTime = (time) => {
    const now = new Date().getTime();
    const epoch = new Date(time * 1000).getTime();

    const relative = (now - epoch) / 1000; //relative time (seconds)

    for (const unit in DATE_UNITS) {
        if (relative > DATE_UNITS[unit] || unit === 'seconds') {
            return rtf.format(
                -Math.round(relative / DATE_UNITS[unit]),
                unit
            )
        }
    }
}

export default getRelativeTime;