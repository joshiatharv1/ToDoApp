<script>
    import { onMount } from 'svelte';
    let countdown = "";
    const classTime = new Date();
    classTime.setHours(14, 0, 0, 0); // Next class at 2:00 PM

    function updateCountdown() {
        const now = new Date();
        const diff = classTime - now;
        if (diff <= 0) {
            countdown = "Class has started!";
        } else {
            const hours = Math.floor(diff / 1000 / 60 / 60);
            const minutes = Math.floor((diff / 1000 / 60) % 60);
            countdown = `${hours}h ${minutes}m to next class`;
        }
    }

    let interval;
    onMount(() => {
        updateCountdown();
        interval = setInterval(updateCountdown, 60000);
    });
</script>

<div class="countdown">
    <p>📚 {countdown}</p>
</div>

<style>
.countdown {
    background: linear-gradient(to right, #ffecd2, #fcb69f);
    padding: 0.75rem 1.25rem;
    border-radius: 0.75rem;
    text-align: center;
    color: #4e342e;
    font-weight: 500;
    margin-bottom: 1rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
</style>