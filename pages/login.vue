<template>
    <section class="bg-gray-50 dark:bg-gray-900 h-screen">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div href="#" class="flex cursor-pointer items-center mb-6 text-4xl font-semibold text-gray-900 dark:text-white">
                <img class="w-20 pointer-events-none h-20 mr-2" src="@/assets/images/logo.png" alt="logo">
                Movies App
            </div>
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Connectez-vous
                    </h1>
                    <form class="space-y-4 md:space-y-6" @submit.prevent="loginUser">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre adresse email</label>
                            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com" required="">
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-500 dark:ring-offset-gray-800" required="">
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="remember" class="text-gray-500 dark:text-gray-300">Se souvenir de moi</label>
                                </div>
                            </div>
                            <a href="#" class="text-sm font-medium text-indigo-500 hover:underline">Mot de passe oublié ?</a>
                        </div>
                        <button type="submit" class="w-full text-white bg-indigo-500 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-500 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Vous n'avez pas de compte ? <a href="#" class="font-medium text-indigo-500 hover:underline">S'inscrire</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        </section>
</template>
<script lang="ts" setup>
const supabase = useSupabaseClient();
const email = ref("");
const password = ref("");
const ErrorMsg = ref(null);
const SuccessMsg = ref(null);

const loginUser = async () => {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value,
        });
        if (error) {
          throw new Error("Erreur lors de la connexion : " + error.message);
        }
        console.log('Utilisateur connecté avec succès:', data);
    } catch (error : any) {
        console.error('Erreur lors de la connexion:', error.message);
    }
}
</script>
<style>
</style>