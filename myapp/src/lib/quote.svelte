<script>
    const quotes = [
        "Stay focused and never give up.",
        "Small steps every day lead to big results.",
        "You don’t have to be perfect, just consistent.",
        "Action is the foundational key to all success."
    ];
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
</script>

<div class="quote">
    <blockquote>"{quote}"</blockquote>
</div>

<style>
.quote {
    text-align: center;
    font-style: italic;
    margin: 1rem 0 2rem;
    color: #555;
}
</style>