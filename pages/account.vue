<script setup lang="ts">
const supabase = useSupabaseClient()

const loading = ref(true)
const username = ref('')
const email = ref('')

loading.value = true
const user = useSupabaseUser()

let { data } = await supabase
  .from('profile')
  .select(`display_name, email`)
  .eq('id', user.value.id)
  .single()

if (data) {
    username.value = data.display_name
    email.value = data.email
    console.log(data);
}

loading.value = false
async function signOut() {
  try {
    loading.value = true
    let { error } = await supabase.auth.signOut()
    if (error) throw error
    user.value = null
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}
</script>

<template>
    <div>
      <button class="button block" @click="signOut" :disabled="loading">Sign Out</button>
    </div>
</template>