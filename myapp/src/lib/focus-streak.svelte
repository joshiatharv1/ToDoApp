<script>
    export let todos = [];

    $: streak = todos.reduce((acc, todo) => acc + (todo.done ? 1 : 0), 0);
</script>

<div class="streak">
    <p>🔥 Focus Streak: {streak}</p>
</div>

<style>
.streak {
    background-color: #fff7e6;
    border: 2px solid #ffa94d;
    color: #cc6600;
    padding: 0.75rem 1rem;
    border-radius: 0.75rem;
    font-weight: 600;
    text-align: center;
}
</style>