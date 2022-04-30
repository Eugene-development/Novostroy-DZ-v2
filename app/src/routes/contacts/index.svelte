<script>
    const title = 'Контакты с нашей компанией Новострой'
    const description = 'Связь с нами по телефону, почте или мессенджеру'
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content="{description}">
</svelte:head>

<div class="bg-gradient-to-b from-white via-white to-gray-50">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
            <h1>
                <span class="block text-base text-center text-sky-600 font-semibold tracking-wide uppercase">Контакты</span>
                <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Связаться с нами</span>
            </h1>
        </div>


        <!-- This example requires Tailwind CSS v2.0+ -->
<!--        <section class="py-12 overflow-hidden md:py-16 lg:py-12">-->
<!--            <div class="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8">-->
<!--                <div class="relative">-->
<!--                    <img class="mx-auto h-96" src="/logo.png" alt="logo">-->
<!--                    <blockquote class="">-->
<!--                        <div class="mt-8 max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">-->
<!--                            <p>&ldquo;Благодаря огромному опыту, а также использованию самого современного оборудования и инструментов, ремонт будет выполнен не только качественно, но и в самые короткие сроки.&rdquo;</p>-->
<!--                        </div>-->
<!--                        <footer class="mt-8">-->
<!--                            <div class="md:flex md:items-center md:justify-center">-->
<!--                                <div class="md:flex-shrink-0">-->
<!--                                    <img class="mx-auto h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">-->
<!--                                </div>-->
<!--                                <div class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">-->
<!--                                    <div class="text-base font-medium text-gray-900">Иванов Иван</div>-->

<!--                                    <svg class="hidden md:block mx-1 h-5 w-5 text-sky-600" fill="currentColor" viewBox="0 0 20 20">-->
<!--                                        <path d="M11 0h3L9 20H6l5-20z" />-->
<!--                                    </svg>-->

<!--                                    <div class="text-base font-medium text-gray-500">Генеральный директор</div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </footer>-->
<!--                    </blockquote>-->
<!--                </div>-->
<!--            </div>-->
<!--        </section>-->


        <div class="max-w-lg py-16 mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
            <div>
                <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">Отдел по работе с клиентами</h2>
                <div class="mt-3">
                    <p class="text-lg text-gray-500">Обращайтесь если вам нужна консультация по вопросам условий работы и заключения договоров.</p>
                </div>
                <div class="mt-9">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <!-- Heroicon name: outline/phone -->
                            <svg class="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <div class="ml-3 text-base text-gray-500">
                            <p>+7 (906) 045-64-44</p>
                            <p class="mt-1">Пн-Сб с 10-00 до 19-00</p>
                        </div>
                    </div>
                    <div class="mt-6 flex">
                        <div class="flex-shrink-0">
                            <!-- Heroicon name: outline/mail -->
                            <svg class="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div class="ml-3 text-base text-gray-500">
                            <p>novo-stroy2009@yandex.ru</p>
                        </div>
                    </div>
                    <div class="mt-6 flex">
                        <div class="flex-shrink-0">
                            <!-- Heroicon name: outline/mail -->
                            <svg class="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>                        </div>
                        <div class="ml-3 text-base text-gray-500">
                            <a href="https://t.me/NovoStrouy">Телеграм: @NovoStrouy</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-12 sm:mt-16 md:mt-0">
                <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">Бригадир мастеров</h2>
                <div class="mt-3">
                    <p class="text-lg text-gray-500">Связь по вопросам выполнения текущих проектов, организации работ и рекламаций.</p>
                </div>
                <div class="mt-9">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <!-- Heroicon name: outline/phone -->
                            <svg class="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <div class="ml-3 text-base text-gray-500">
                            <p>+7 (930) 276-56-50</p>
                            <p class="mt-1">Пн-Вс с 8-00 до 21-00</p>
                        </div>
                    </div>
                    <div class="mt-6 flex">
                        <div class="flex-shrink-0">
                            <!-- Heroicon name: outline/mail -->
                            <svg class="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div class="ml-3 text-base text-gray-500">
                            <p>buildnovostroi@gmail.com</p>
                        </div>
                    </div>
                    <div class="mt-6 flex">
                        <div class="flex-shrink-0">
                            <!-- Heroicon name: outline/mail -->
                            <svg class="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>                        </div>
                        <div class="ml-3 text-base text-gray-500">
                            <a href="https://t.me/NovoStrouy">Телеграм: @NovoStrouy</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<!--        <img class="mx-auto h-96" src="/logo.png" alt="logo">-->




    </div>
</div>
