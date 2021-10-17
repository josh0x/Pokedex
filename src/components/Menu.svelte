<script>
    import {createEventDispatcher} from 'svelte'
    import {clickOutside} from '../services/clickOutside'

    export let user;
    export let isOpen = false;

    const dispatch = createEventDispatcher();

    function openMenu() {
        isOpen = !isOpen;
    }

    function handleClickOutside() {
        isOpen = false;
    }
</script>

<div class="menu relative cursor-pointer">
    <div class="flex items-center justify-center" on:click={openMenu}>
        <p class="mr-2">{user.name}</p>
        <div class="w-8 h-8 rounded-full overflow-hidden">
           <img src={user.picture} class="w-8 h-8" alt={user.name} /> 
        </div>
    </div>
{#if isOpen}
    <div class="flex felx-col text-right absolute border top-16 right-0 bg-white z-50 rounded-lg p-4 text-black pl-32" 
    use:clickOutside
    on:click={handleClickOutside}
    >
    <p class="text-red-500" on:click="{() => dispatch('confirmLogout')}">
        Logout
    </p>
    </div>
{/if}
</div>    
