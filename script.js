document.addEventListener('DOMContentLoaded', () => {
    const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDay = document.querySelector('[data-testid="currentDay"]');

    function updateTime() {
        const now = new Date();
        const options = { weekday: 'long' };
        currentTimeUTC.textContent = `Current Time (UTC): ${now.toUTCString()}`;
        currentDay.textContent = `Current Day: ${new Intl.DateTimeFormat('en-US', options).format(now)}`;
    }

    updateTime();
    setInterval(updateTime, 1000);
});
