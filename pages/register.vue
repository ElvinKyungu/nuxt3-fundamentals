<template>
    <section class="bg-gray-50 dark:bg-gray-900 h-screen">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-4xl font-semibold text-gray-900 dark:text-white">
                <img class="w-20 h-20 mr-2" src="@/assets/images/logo.png" alt="logo">
                Movies App
            </a>
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Inscrivez-vous
                    </h1>
                    <form class="space-y-4 md:space-y-6" @submit.prevent="registerUser"> 
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre nom</label>
                            <input type="text" v-model="userName" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com">
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre adresse email</label>
                            <input type="email" v-model="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com">
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                            <input type="password" v-model="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                        <button type="submit" class="w-full text-white bg-indigo-500 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-500 dark:hover:bg-primary-700 dark:focus:ring-primary-800">S'inscrire</button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Vous avez déjà un compte ? <a href="#" class="font-medium text-indigo-500 hover:underline">Se connecter</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>

const supabase = useSupabaseClient();

const userName = ref("");
const email = ref("");
const password = ref("");
const success = ref("");
const { data: profile } = await supabase
  .from('profile')
  .select('id, username, avatar_url, website');

// const registerUser = async () => { 
//     try {
//         const { user, error } = await supabase.auth.signUp({
//             email: email.value,
//             password: password.value
//         });
        
//         if (error) {
//             throw new Error(error.message);
//         }
//         // Enregistrement des autres détails de profil dans la table "profile"
//         const { data, error: profileError } = await supabase
//             .from('profile')
//             .insert([{ 
//                 display_name: userName.value, 
//                 email: email.value, 
//                 password: password.value }
//             ]);
            
//         if (profileError) {
//             throw new Error(profileError.message);
//         }   
//         console.log('Utilisateur inscrit avec succès:', user);
//     } 
//     catch (error) {
//         console.error('Erreur lors de l\'inscription:', error.message);
//     }
// };
</script>

<style>
</style>
