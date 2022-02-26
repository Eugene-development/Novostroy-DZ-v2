<script>
    import {useTimeLine} from "$lib/use/content/company";

    const {timeLine} = useTimeLine
</script>

<section aria-labelledby="timeline-title" class="lg:col-start-3 lg:col-span-1">
    <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
        <h2 id="timeline-title" class="text-lg font-medium text-gray-900">Таймлайн</h2>

        <!-- Activity Feed -->
        <div class="mt-6 flow-root">
            <div class="-mb-8">

                {#each timeLine as {id, date, event}, i}
                    <div class="relative pb-8">
                        {#if timeLine.length - 1 !== i}
                        <span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                        {/if}
                        <div class="relative flex space-x-3">
                            <div>
                              <span class="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center ring-8 ring-white">
                                <!-- Heroicon name: solid/check -->
                                <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                              </span>
                            </div>
                            <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                <div>
                                    <p class="text-sm text-gray-500">{event}</p>
                                </div>
                                <div class="text-right text-sm whitespace-nowrap text-gray-500">
                                    <time datetime="2020-09-28">{date}</time>
                                </div>
                            </div>
                        </div>
                    </div>
                {:else}
                    <p>Нет данных!</p>
                {/each}

            </div>
        </div>
        <div class="mt-6 flex flex-col justify-stretch">
            <button type="button" class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 cursor-not-allowed">
                Добавить событие
            </button>
        </div>
    </div>
</section>
