<script>
    import Calculation from "$lib/components/forms/calculation/index.svelte";
    import ElementTransitions from "$lib/ElementTransitions/index.svelte";


    import {useHeader} from "$lib/use/content/header";
    import {page} from '$app/stores';

    const {Menu} = useHeader

    import MobileMenu from "./mobile/index.svelte";

    import { mobileMenu} from "../../stores.js";

    const changeVisibleMobileMenu = () => mobileMenu.update(invert);
    let visibleMobileMenu;
    mobileMenu.subscribe(value => visibleMobileMenu = value);

    import { formCalculation } from "../../stores.js";
    import { useVisible } from "$lib/use/functions/visible";
    const { invert } = useVisible;


    import axios from "axios";

    const changeVisibleFormCalculation = () => formCalculation.update(invert)//Сеттер
    let visibleFormCalculation;
    formCalculation.subscribe(value => visibleFormCalculation = value);//Геттер




    let pageOffer;
    let pageDescription;
    $: switch ($page.url.pathname) {
        case '/':
            pageOffer = 'Ремонт квартир в Дзержинске'
            pageDescription = 'Независимо от того, какой именно ремонт в квартире нужен, наши специалисты выполнят любые работы. Вы можете заказать ремонт одной из комнат, помещения или полностью квартиры под ключ – мы сделаем работу быстро и качественно.'
            break;
        case '/about':
            pageOffer = 'О нашей компании'
            pageDescription = 'Для нас главным приоритетом является довольный клиент, поэтому мы выбираем и применяем лучшие технологические решения. В результате каждый, кто обращается к нам, на собственном примере убеждается – это действительно то, чего он хотел.'
            break;
        case '/price':
            pageOffer = 'Цены на услуги'
            pageDescription = 'Стоимость наших услуг зависит от объема, а также сложности работ. Мы также разработали специальные программы лояльности, акции и другие бонусы, помогающие сэкономить. К тому же даже без скидок наш обычный прайс имеет доступные цены.'
            break;
        case '/objects':
            pageOffer = 'Выполненные объекты'
            pageDescription = 'Здесь вашему вниманию представлены проекты выполненных работ по ремонту квартир разных стилей. Своей гордостью мы считаем максимальное внимание именно к деталям и мелочам, ведь именно из них состоит основа вашего будущего комфорта и удобства.'
            break;
        case '/blog':
            pageOffer = 'Наш блог'
            pageDescription = 'Мы собрали самые интересные статьи, из которых вы сможете узнать ценную информацию, касаемо квартирного ремонта и всем, что с ним связано. Независимо от того, что именно вас интересует, просто заходите сюда, и вы наверняка найдёте что-то интересное.'
            break;
        case '/contacts':
            pageOffer = 'Связь с нами'
            pageDescription = 'Если по каким-либо причинам у вас остались или наоборот, появились вопросы, вы можете задать их нашим специалистам по телефону, почте или через чат. Мы практически все время на связи, поэтому ответ последует в максимально короткие сроки.'
            break;
        default:
            pageOffer = 'Блог о ремонте'
            pageDescription = 'Мы периодически добавляем посты на тему ремонта квартир. В них вы найдёте полезную информацию на ту или иную тему, а также полезные советы, которые вам помогут сделать ремонт более качественно и красиво.'
            break;
    }
</script>


<div class="relative bg-sky-900">
    <div class="max-w-7xl mx-auto py-3 lg:px-8">
        <div class="text-center">
            <div class="font-medium text-white text-sm px-8">
                <span>Скидки постоянным клиентам - Работаем круглосуточно - Требуются мастера - Качество работ гарантируем</span>
            </div>
        </div>
    </div>
</div>

<header >

    <div class="relative pb-16 sm:pb-16">
        <div class="absolute inset-0">
<!--            <img class="w-full h-full object-cover" src="https://smart-otdelka.ru/upload/iblock/aed/aedb211a487000654b4d3598f6904f4f.jpg" alt="">-->
<!--            <img class="w-full h-full object-cover" src="https://avatars.mds.yandex.net/i?id=987b9678a99eb3232829d2b72dff58a0-5598196-images-thumbs&n=13&exp=1" alt="">-->
            <img class="w-full h-full object-cover" src="https://catherineasquithgallery.com/uploads/posts/2021-03/1614808138_178-p-fon-dlya-stroitelnogo-saita-224.jpg" alt="">
<!--            <div class="absolute inset-0 bg-gradient-to-l from-sky-700 to-sky-900 mix-blend-multiply" aria-hidden="true"></div>-->
        </div>
        <div class="relative z-10 bg-sky-100 bg-opacity-40">
            <nav class="relative max-w-7xl mx-auto flex items-center justify-between p-2" aria-label="Global">
                <div class="flex items-center justify-between w-full lg:w-auto">
                    <a href="/">
                        <span class="sr-only">Novostroy</span>
                        <img class="h-14 w-auto sm:h-14" src="/logo-header.png" alt="logo">
                    </a>
                    <div class="-mr-2 flex items-center lg:hidden">
                        <button on:click={changeVisibleMobileMenu} type="button" class="bg-sky-800 bg-opacity-0 rounded-md p-2 inline-flex items-center justify-center text-sky-600 hover:text-sky-100 hover:bg-opacity-100 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <span class="mx-2">Меню</span>

                            <!-- Heroicon name: outline/menu -->
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="hidden space-x-10 lg:flex lg:ml-10">
                    {#each Menu as {value, link}}
                        <a href="/{link}" class="text-base font-medium text-sky-900 hover:text-pink-900"> {value} </a>
                    {/each}
                </div>
<!--                <div class="hidden lg:flex lg:items-center lg:space-x-6">-->
<!--                    <button on:click={ changeVisibleFormCalculation } class="py-2 px-6 bg-sky-800 bg-opacity-70 border border-transparent rounded-md text-base font-medium text-slate-100 hover:bg-opacity-60"> Заказать расчёт </button>-->
<!--                    -->
<!--                </div>-->


                <div class="hidden lg:flex items-center px-2">
                    <div class="">
                        <div class="flex space-x-2 bg-cyan-800 bg-opacity-10 px-3 py-2 rounded-xl">
                            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-sky-900 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                            </svg>
                            <p class="text-sky-900  rounded-md text-xl font-bold ">+7 (906) 045-64-44</p>
                        </div>
                    </div>
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
                <h1 class="text-3xl font-bold tracking-tight text-cyan-900 sm:text-3xl lg:text-5xl ">{pageOffer}</h1>
                <p class="mt-6 p-4 text-xl text-slate-100 max-w-2xl bg-cyan-900 bg-opacity-50 rounded-md">{pageDescription}</p>
                <div class="">
                    <button on:click={ changeVisibleFormCalculation } class="mt-8 py-2 px-6 bg-cyan-800  p-2 rounded-xl  border border-transparent rounded-md text-2xl font-bold text-cyan-900 hover:text-gray-100 bg-opacity-10 hover:bg-opacity-60"> Заказать расчёт </button>
                </div>

            </div>


    </div>
    <Calculation/>
    <MobileMenu/>

</header>
