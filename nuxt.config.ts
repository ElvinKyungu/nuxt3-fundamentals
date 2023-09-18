// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase'],
  css: ['~/assets/css/main.css'],
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: true,
    cookieName: "sb",
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: [],
    },
    cookieOptions: {
      maxAge: 60 * 60 * 8,
      sameSite: 'lax',
      secure: true
    },
    clientOptions: {
      auth: {
        flowType: 'pkce',
        detectSessionInUrl: true,
        persistSession: true,
        autoRefreshToken: true
      },
    },    
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      apiKey: process.env.API_KEY, // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    }
  }
})
