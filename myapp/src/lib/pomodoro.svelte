<script>
    let time = 25 * 60; // 25 minutes
    let interval;
    let running = false;

    function start() {
        if (!running) {
            running = true;
            interval = setInterval(() => {
                if (time > 0) time--;
                else stop();
            }, 1000);
        }
    }

    function stop() {
        running = false;
        clearInterval(interval);
    }

    function reset() {
        stop();
        time = 25 * 60;
    }

    $: minutes = String(Math.floor(time / 60)).padStart(2, '0');
    $: seconds = String(time % 60).padStart(2, '0');
</script>

<div class="pomodoro">
    <h2>Pomodoro Timer</h2>
    <div class="clock">{minutes}:{seconds}</div>
    <div class="buttons">
        <button on:click={start}>Start</button>
        <button on:click={stop}>Stop</button>
        <button on:click={reset}>Reset</button>
    </div>
</div>

<style>
.pomodoro {
    text-align: center;
    margin-top: 2rem;
    padding: 1rem;
    background: #f5faff;
    border-radius: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}
.clock {
    font-size: 2rem;
    font-weight: bold;
    margin: 1rem 0;
}
.buttons button {
    margin: 0 0.5rem;
    padding: 0.5rem 1rem;
    border: none;
    background-color: #1e90ff;
    color: white;
    border-radius: 0.5rem;
    cursor: pointer;
}
.buttons button:hover {
    background-color: #187bcd;
}
</style>