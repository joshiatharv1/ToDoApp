export const get=() =>{
    return {
        status: 200,
        body: {
            todos: [
                { id: 1, text: 'Learn SvelteKit', completed: false },
                { id: 2, text: 'Build a Svelte app', completed: false }
            ]
        }
    };
}