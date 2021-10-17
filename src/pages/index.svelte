<script>
  import { initAuth } from "../auth";
  import { Auth } from '../components'

  const { loginWithGoogle, logout, user } = initAuth();

  let _user;
  user.subscribe((v) => (_user = v));
</script>

<main>
  <div class="w-full max-w-xs pt-10 pl-20 ">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="flex space-x-4">
          {#if _user}
            <button type="button" on:click|preventDefault={logout}> Logout </button>
          {:else}
            <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click|preventDefault={loginWithGoogle}>
              Sign In with Google
            </button>
          {/if}
        </div>
    </form>
  </div>

  <p>hello world</p>
  <Auth/>
  
</main> 

