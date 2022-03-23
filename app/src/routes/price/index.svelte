<script>
    import {usePrice} from "$lib/use/content/price";
    const {Price} = usePrice
</script>

<div class="bg-gradient-to-b from-white to-gray-50">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
            <h1>
                <span class="block text-base text-center text-sky-600 font-semibold tracking-wide uppercase">Цены</span>
                <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Стоимость наших услуг</span>
            </h1>

        </div>

        <div class="sm:flex sm:flex-col sm:align-center">
            <div class="relative self-center mt-6 bg-gray-100 rounded-lg p-0.5 flex sm:mt-8">
                <button type="button" class="relative w-1/2 bg-white border-gray-200 rounded-md shadow-sm py-2 text-sm font-medium text-gray-900 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8">Базовые цены</button>
                <button type="button" class="ml-0.5 relative w-1/2 border border-transparent rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8">Льготные цены</button>
            </div>
        </div>
        <div class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">

            {#each Price as {name, price, work}}
            <div class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
                <div class="p-6">
                    <h2 class="text-lg leading-6 font-medium text-gray-900">{name}</h2>
                    <p class="mt-4 text-sm text-gray-500">All the basics for starting a new business</p>
                    <p class="mt-8">
                        <span class="text-4xl font-extrabold text-gray-900">от {price} ₽</span>
                        <span class="text-base font-medium text-gray-500">/м.кв</span>
                    </p>
                    <a href="#" class="mt-8 block w-full bg-sky-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-sky-900">Запись на замер</a>
                </div>
                <div class="pt-6 pb-8 px-6">
                    <h3 class="text-xs font-medium text-gray-900 tracking-wide uppercase">Что входит:</h3>
                    <ul role="list" class="mt-6 space-y-4">

                        {#each work as {name}}
                        <li class="flex space-x-3">
                            <!-- Heroicon name: solid/check -->
                            <svg class="flex-shrink-0 h-5 w-5 text-sky-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-sm text-gray-500"> {name} </span>
                        </li>
                        {/each}

                    </ul>
                </div>
            </div>
            {/each}
        </div>
    </div>
</div>
