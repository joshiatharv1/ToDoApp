<script>
    import { createEventDispatcher } from 'svelte';
    export let todo;

    const dispatch = createEventDispatcher();
    let editingText = todo.text;

    // Dispatch 'updateTodo' event
    function handleUpdate() {
        dispatch('updateTodo', { id: todo.id, text: editingText });
    }

    // Dispatch 'deleteTodo' event
    function handleDelete() {
        dispatch('deleteTodo', todo.id);
    }

    // Dispatch 'toggleDone' event
    function handleToggle() {
        dispatch('toggleDone', todo.id);
    }
</script>

<div class="todo-item">
    <button on:click={handleToggle} class="status-btn">
        {todo.done ? "✅" : "⬜"}
    </button>

    <input
        type="text"
        bind:value={editingText}
        on:blur={handleUpdate}
        class:done={todo.done}
    />

    <button on:click={handleDelete} class="delete-btn">
        🗑️
    </button>
</div>

<style>
.todo-item {
    display: flex;
    align-items: center;
    background: #ffffffdd;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
    margin-bottom: 1rem;
    gap: 0.5rem;
    transition: all 0.2s ease-in-out;
}
.todo-item:hover {
    transform: scale(1.01);
}
input[type="text"] {
    flex: 1;
    padding: 0.6rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    outline: none;
    background: #f0f0f0;
}
input.done {
    text-decoration: line-through;
    color: gray;
    background: #e0e0e0;
}
button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    transition: transform 0.2s ease;
}
button:hover {
    transform: scale(1.2);
}
.delete-btn {
    color: #ff4c4c;
}
.status-btn {
    font-size: 1.5rem;
}
</style>
