<script>

    import { page } from '$app/stores';
    let pageOffer;
   $: switch ($page.url.pathname) {
        case '/': pageOffer = 'Ремонт квартир в Дзержинске'
            break;
        case '/about': pageOffer = 'О нашей компании'
            break;
        case '/price': pageOffer = 'Цены на услуги'
            break;
        case '/objects': pageOffer = 'Выполненные объекты'
            break;
        case '/blog': pageOffer = 'Наш блог'
            break;
        case '/contacts': pageOffer = 'Связь с нами'
            break;
    }
</script>

<div class="bg-white">
    <div class="relative pb-24 bg-sky-800 sm:pb-32">
        <div class="absolute inset-0">
<!--            <img class="w-full h-full object-cover" src="https://smart-otdelka.ru/upload/iblock/aed/aedb211a487000654b4d3598f6904f4f.jpg" alt="">-->
<!--            <img class="w-full h-full object-cover" src="https://avatars.mds.yandex.net/i?id=987b9678a99eb3232829d2b72dff58a0-5598196-images-thumbs&n=13&exp=1" alt="">-->
            <img class="w-full h-full object-cover" src="https://catherineasquithgallery.com/uploads/posts/2021-03/1614808138_178-p-fon-dlya-stroitelnogo-saita-224.jpg" alt="">
<!--            <div class="absolute inset-0 bg-gradient-to-l from-sky-700 to-sky-900 mix-blend-multiply" aria-hidden="true"></div>-->
        </div>
        <div class="relative z-10 bg-sky-100 bg-opacity-40">
            <nav class="relative max-w-7xl mx-auto flex items-center justify-between p-2 px-4 sm:px-6 lg:px-8" aria-label="Global">
                <div class="flex items-center justify-between w-full lg:w-auto">
                    <a href="/">
                        <span class="sr-only">Workflow</span>
                        <img class="h-14 w-auto sm:h-14" src="/logo-header.png" alt="logo">
                    </a>
                    <div class="-mr-2 flex items-center lg:hidden">
                        <button type="button" class="bg-sky-800 bg-opacity-0 rounded-md p-2 inline-flex items-center justify-center text-cyan-100 hover:bg-opacity-100 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <!-- Heroicon name: outline/menu -->
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="hidden space-x-10 lg:flex lg:ml-10">
                    <a href="/" class="text-base font-medium text-sky-900 hover:text-pink-900"> Главная </a>
                    <a href="/about" class="text-base font-medium text-sky-900 hover:text-pink-900"> О нас </a>
                    <a href="/price" class="text-base font-medium text-sky-900 hover:text-pink-900"> Цены </a>
                    <a href="/objects" class="text-base font-medium text-sky-900 hover:text-pink-900"> Объекты </a>
                    <a href="/blog" class="text-base font-medium text-sky-900 hover:text-pink-900"> Блог </a>
                    <a href="/contacts" class="text-base font-medium text-sky-900 hover:text-pink-900"> Контакты </a>
                </div>
                <div class="hidden lg:flex lg:items-center lg:space-x-6">
                    <a href="/" class="py-2 px-6 bg-sky-800 bg-opacity-70 border border-transparent rounded-md text-base font-medium text-sky-100 hover:bg-opacity-60"> Заказать ремонт </a>
                </div>
            </nav>

            <!--
              Mobile menu, show/hide based on menu open state.

              Entering: "duration-150 ease-out"
                From: "opacity-0 scale-95"
                To: "opacity-100 scale-100"
              Leaving: "duration-100 ease-in"
                From: "opacity-100 scale-100"
                To: "opacity-0 scale-95"
            -->
            {#if false}
            <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top lg:hidden">
                <div class="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div class="px-5 pt-4 flex items-center justify-between">
                        <div>
                            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=emerald&shade=400" alt="">
                        </div>
                        <div class="-mr-2">
                            <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                                <span class="sr-only">Close menu</span>
                                <!-- Heroicon name: outline/x -->
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="pt-5 pb-6">
                        <div class="px-2 space-y-1">
                            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-warm-gray-900 hover:bg-warm-gray-50">Changelog</a>

                            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-warm-gray-900 hover:bg-warm-gray-50">About</a>

                            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-warm-gray-900 hover:bg-warm-gray-50">Partners</a>

                            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-warm-gray-900 hover:bg-warm-gray-50">News</a>
                        </div>
                        <div class="mt-6 px-5">
                            <a href="#" class="block text-center w-full py-2 px-4 border border-transparent rounded-md shadow bg-green-400 text-white font-medium hover:bg-green-500">Login</a>
                        </div>
                    </div>
                </div>
            </div>
            {/if}
        </div>

        <div class="relative mt-24 mx-auto p-4 sm:max-w-3xl sm:mt-32 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 class="text-4xl font-bold tracking-tight text-sky-900 sm:text-5xl lg:text-5xl">{pageOffer}</h1>
            <p class="mt-6 text-xl text-sky-900 max-w-2xl">Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut consectetur. Sit justo viverra non adipisicing elit distinctio.</p>
        </div>


    </div>
</div>
