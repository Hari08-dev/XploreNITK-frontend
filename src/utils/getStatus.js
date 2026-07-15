export const getStatus = (timings) => {
    const now = new Date();

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const today = days[now.getDay()];

    const schedule = timings.find(t => t.day === today);

    if (!schedule) {
        return "Closed";
    }

    const currentMinutes =
        now.getHours() * 60 + now.getMinutes();

    const [openHour, openMinute] =
        schedule.open.split(":").map(Number);

    const [closeHour, closeMinute] =
        schedule.close.split(":").map(Number);

    const openMinutes =
        openHour * 60 + openMinute;

    const closeMinutes =
        closeHour * 60 + closeMinute;

    return currentMinutes >= openMinutes &&
           currentMinutes < closeMinutes
        ? "Open"
        : "Closed";
};