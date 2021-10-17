<!-- Auth.svelte is not a component that will be used like the others
It will have no design or view
It's going to check if we are logged in or not & return on the logic of the Authentication -->
<script context="module"> // It will make it able to import this Auth.svelte fuction from here 
    import { initAuth } from './../auth/index.js';
    export const { user, loginWithGoogle } = initAuth(); // This new const will be initAuth & from initAuth we are going to export the user, loginWithGoogle

    user.subscribe((v) => console.log(v)); // To read a store in Svelte, you need to subscribe to them
</script>