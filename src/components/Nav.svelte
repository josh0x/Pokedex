<script>
  import { url } from "@roxi/routify";
  import { Button } from '../components';
  import { user, loginWithGoogle, logout } from '../components/Auth.svelte';

  let _user;

  user.subscribe((v) => (_user = v));
</script>

<main class="w-full flex justify-between items-center bg-red-500 p-4 text-white">
  <div class="bg-white p-1 rounded-full">
    <a href={$url("../")}>
      <img class="w-8 h-8" src="images/logo.png" alt="logo" />
    </a>
  </div>

  {#if _user}
    <Button title="Logout" on:click={logout} /> 
  {:else}
    <Button title="Login with Google" on:click={loginWithGoogle} /> 
  {/if}
</main> 