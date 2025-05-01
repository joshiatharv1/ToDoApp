<script>
    import TodoItem from "$lib/todo-item.svelte";
    import Pomodoro from "$lib/pomodoro.svelte";
    import DailyQuote from "$lib/quote.svelte";
    import FocusStreak from "$lib/focus-streak.svelte";
    import "../app.css";

    let title = "FocusBoard";
    let todos = [];
    let newTodo = "";

    // Add new todo to the list
    function addTodo(e) {
        e.preventDefault();
        if (newTodo.trim()) {
            todos = [...todos, { id: Date.now(), text: newTodo, done: false }];
            newTodo = "";
        }
    }

    // Toggle the done status of a todo
    function toggleDone(event) {
        const id = event.detail;
        todos = todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo);
    }

    // Update a todo's text
    function updateTodo(event) {
        const { id, text } = event.detail;
        todos = todos.map(todo => todo.id === id ? { ...todo, text } : todo);
    }

    // Delete a todo by ID
    function deleteTodo(event) {
        const id = event.detail;
        console.log('Deleting todo with ID:', id);  // For debugging
        todos = todos.filter(todo => todo.id !== id);
    }
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<main>
    <h1>{title}</h1>
    <DailyQuote />
    <FocusStreak {todos} />


    <form on:submit={addTodo} class="add-form">
        <input
            type="text"
            bind:value={newTodo}
            placeholder="What do you need to do today?"
            aria-label="Add a todo"
        />
        <button type="submit">Add Task</button>
    </form>

    <div class="todo-list">
        {#each todos as todo (todo.id)}
            <TodoItem {todo} on:toggleDone={toggleDone} on:updateTodo={updateTodo} on:deleteTodo={deleteTodo} />
        {/each}
    </div>

    <Pomodoro />
</main>
