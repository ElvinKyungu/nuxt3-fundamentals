<template>
    <section class="mt-16">
        <div class=" xl:container m-auto px-6 md:px-12">
            <div class="relative lg:flex lg:items-center lg:gap-12 mb-16 ">
                <div class="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-[70%] ">
                    <div>
                        <form class="w-full mt-12">
                            <div class="relative flex items-center px-2 p-1 lg:py-4 rounded-full shadow-md md:p-2 lg:pr-3 " style="border: .1px solid rgb(218, 218, 218);">
                                <div class="pl-6 py-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                    </svg>
                                </div>
                                <slot></slot>
                                <div class="md:pr-1.5 lg:pr-0 flex gap-4">
                                    <button type="button" title="Start buying" class="relative h-12 w-20 sm:w-auto ml-auto sm:px-6 before:absolute rounded-full before:inset-0  bg-black/5">
                                        <span class="relative hidden w-max text-black  font-semibold md:block">
                                            Chercher
                                        </span>
                                    </button>
                                    <button type="button" title="Start buying" class="relative h-12 w-20 sm:w-auto ml-auto sm:px-6 before:absolute rounded-full before:inset-0  bg-black/5">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    </section>
</template>