<script>
  import TodoItem from "./TodoItem.svelte";
  import { posts } from "./stores.js";

  let newItem;
  let posts_value;

  function addItem() {
    posts.update(p => {
      console.log(p);
      p[Date.now()] = {
      done: false,
      title: newItem
    };
    return p;
    });
    newItem = "";
  }
</script>

<ul>
  {#each Object.keys($posts) as postID}
    <TodoItem {...$posts[postID]} {postID} />
  {/each}
</ul>
<input bind:value={newItem} />
<button on:click={addItem}>Add Item</button>
