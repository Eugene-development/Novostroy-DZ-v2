<script>
    const title = 'Блог нашей компании Новострой'
    const description = 'Полезная информация и советы на тему ремонта'
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content="{description}">
</svelte:head>


<div class="bg-gradient-to-b from-white via-white to-gray-50 py-16 px-4 sm:px-6 lg:py-16 lg:px-8">
    <div class="text-lg  max-w-prose mx-auto">
        <h1>
            <span class="block text-base text-center text-sky-600 font-semibold tracking-wide uppercase">Блог</span>
            <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Наши посты в блоге</span>
        </h1>
    </div>


    <div class="relative py-16 max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">

        <div>
            <h2 class="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl">Всё о ремонте квартир</h2>
            <div class="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
                <p class="text-xl text-gray-500">Интересные статьи с полезной информацией и советами.</p>
                <form class="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
                    <div>
                        <label for="email-address" class="sr-only">Email address</label>
                        <input id="email-address" name="email-address" type="email" autocomplete="email" required class="appearance-none w-full px-4 py-2 border border-gray-300 text-base rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-sky-500 focus:border-sky-500 lg:max-w-xs" placeholder="Введите почту">
                    </div>
                    <div class="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex">
                        <button type="button" class="w-full bg-sky-600 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:w-auto sm:inline-flex">Подписаться</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            <div>
                <p class="text-sm text-gray-500">
                    <time datetime="2020-03-16">20 марта, 2022</time>
                </p>
                <a sveltekit:noscroll href="/blog/post/1" class="mt-2 block">
                    <p class="text-xl font-semibold text-gray-900">Декоротивная отделка</p>
                    <p class="mt-3 text-base text-gray-500">Многих людей часто что-то не устраивает в своем жилище, но декоративная отделка квартир раз и навсегда решит эту проблему. Чаще всего именно отсутствие оригинального декора делает помещение заурядным и ничем ...</p>
                </a>
                <div class="mt-3">
                    <a sveltekit:noscroll href="/blog/post/1" class="text-base font-semibold text-sky-600 hover:text-sky-500"> Читать полностью </a>
                </div>
            </div>
            <div>
                <p class="text-sm text-gray-500">
                    <time datetime="2020-03-16">4 апреля, 2022</time>
                </p>
                <a sveltekit:noscroll href="/blog/post/2" class="mt-2 block">
                    <p class="text-xl font-semibold text-gray-900">Паркетная доска</p>
                    <p class="mt-3 text-base text-gray-500">Во время квартирного ремонта, даже используя, самые дорогие и качественные материалы, их всегда можно испортить, если нет соответственного опыта и квалификации. Ну а если речь идет о таком важном деле, как укладка ...</p>
                </a>
                <div class="mt-3">
                    <a sveltekit:noscroll href="/blog/post/2" class="text-base font-semibold text-sky-600 hover:text-sky-500"> Читать полностью </a>
                </div>
            </div>

        </div>
    </div>
</div>
