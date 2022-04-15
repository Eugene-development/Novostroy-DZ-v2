<script>
    import {useObjects} from "$lib/use/content/objects";
    const {Objects} = useObjects

    const title = 'Объекты и выполненные работы компанией Новострой'
    const description = 'Фотографии, адреса и тип ремонта, сделанные компанией Новострой'
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content="{description}">
</svelte:head>


<div class="bg-gradient-to-b from-white via-white to-gray-50">
    <div class="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">

        <div class="text-lg max-w-prose mx-auto">
            <h1>
                <span class="block text-base text-center text-sky-600 font-semibold tracking-wide uppercase">Объекты</span>
                <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Наши работы</span>
            </h1>
        </div>

        <div class="max-w-2xl mx-auto py-8 sm:py-16 lg:py-24 lg:max-w-none">
            <div class="mt-2 lg:grid lg:grid-cols-3 lg:gap-x-6">

                {#each Objects as {id, title, address, img}}
                    <div class="group relative mb-8">
                        <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                            <img src="objects/{img}" alt="object" class="w-full h-full object-center object-cover">
                        </div>
                        <h3 class="mt-6 text-sm text-gray-500">
                                <span class="absolute inset-0"></span>
                                Адрес объекта:
                        </h3>
                        <p class="text-base font-semibold text-gray-900">{address}</p>
                    </div>
                {/each}

            </div>
        </div>
    </div>
</div>
