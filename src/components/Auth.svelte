<!-- Auth.svelte is not a component that will be used like the others
It will have no design or view
It's going to check if we are logged in or not & return on the logic of the Authentication -->
<script context="module"> // It will make it able to import this Auth.svelte fuction from here 
    import { initAuth } from './../auth/index.js';
    import { userStore } from '../store';
    import { GET_USER_DOCUMENT } from '../services/firebase.js';
    export const { user, loginWithGoogle, logout } = initAuth(); // This new const will be initAuth & from initAuth we are going to export the user, loginWithGoogle

    user.subscribe((v) => {
    if (v) {
      GET_USER_DOCUMENT(v.id)
        .then((data) => {
          if (data) {
            userStore.set('favorites', data.favorites);
          }
        })
        .catch((err) => console.log(err));
    }
  });
</script>