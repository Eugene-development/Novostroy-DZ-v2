<script>
    import {useHeader} from "$lib/use/content/header";
    import {formMeasurement, mobileMenu} from '../../../stores.js';

    const {menu} = useHeader;
    import {useVisible} from "$lib/use/visible";

    const {invert} = useVisible;

    const changeVisibleFormMeasurement = () => formMeasurement.update(invert);
    let visibleFormMeasurement;
    formMeasurement.subscribe(value => visibleFormMeasurement = value);


    const changeVisibleMobileMenu = () => mobileMenu.update(invert);
    let visibleMobileMenu;
    mobileMenu.subscribe(value => visibleMobileMenu = value);

</script>
<!--
  Mobile menu, show/hide based on menu open state.

  Entering: "duration-150 ease-out"
    From: "opacity-0 scale-95"
    To: "opacity-100 scale-100"
  Leaving: "duration-100 ease-in"
    From: "opacity-100 scale-100"
    To: "opacity-0 scale-95"
-->

{#if visibleMobileMenu}

    <div class="absolute z-20 top-0 inset-x-0 p-2 transition transform origin-top lg:hidden bg-gray-50">
        <div class="rounded-lg shadow-md  ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div class="px-5 pt-4 flex items-center justify-between">
                <a on:click={changeVisibleMobileMenu} href="/">
                    <img class="h-8 w-auto" src="/Logo/logo1.svg"
                         alt="main">
                </a>

                <div class="-mr-2">
                    <button on:click={changeVisibleMobileMenu} type="button"
                            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                        <span class="sr-only">Close menu</span>
                        <!-- Heroicon name: outline/x -->
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="pt-5 pb-2">
                <div class="px-2 space-y-1">
                    {#each menu as { value, link }, i}
                        <a class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50" href="/{link}" on:click={changeVisibleMobileMenu}>{value}</a>
                    {:else}
                        <p>Нет данных!</p>
                    {/each}
                </div>
                <div class="mt-6 px-5">
                    <button on:click={changeVisibleFormMeasurement} type="button"
                            class="block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-green-500 to-cyan-600 text-white font-medium hover:from-green-600 hover:to-cyan-700">Получить консультацию</button>
                </div>
                <div class="mt-2 px-5">
                    <p class="text-center text-sm font-medium text-gray-500">Услуга бесплатная</p>
                </div>
            </div>
        </div>
    </div>
{/if}
