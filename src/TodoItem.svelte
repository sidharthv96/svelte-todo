<script>
  import { posts } from "./stores.js";
	import { fade } from 'svelte/transition';

  export let title;
  export let done;
  export let postID;

  function removeTodo() {
    posts.update(p => {
      delete p[postID];
      return p;
    });
  }


  function toggleTodo() {
    posts.update(p => {
      p[postID].done = !done;
      return p;
    });
  }

</script>

<style>
  li {
    background: #cce5ff;
    margin: 5px;
  }

  .done {
    text-decoration: line-through;
    background: #adfab1;
  }
</style>

<li class:done transition:fade>
  {title}
  {postID}
  <button on:click={toggleTodo}>Done</button>
  <button on:click={removeTodo}>Delete</button>
</li>
