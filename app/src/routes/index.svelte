<script>
  import { useMain } from "$lib/use/content/main";
  import { formCalculation, formConsultation } from "../stores.js";
  import { useVisible } from "$lib/use/functions/visible/index.js";

  import Consultation from "$lib/components/forms/consultations/index.svelte";
  const { invert } = useVisible;

  const changeVisibleFormConsultation = () => formConsultation.update(invert);
  let visibleFormConsultation;
  formConsultation.subscribe((value) => (visibleFormConsultation = value));

  const { Benefits } = useMain;
  const title = "Ремонт квартир в Москве и области";
  const description =
    "Выполняем работы по ремонту квартир в Москве по проиемлемым ценам";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>

<!-- This example requires Tailwind CSS v2.0+ -->

<div class="bg-gradient-to-b from-white via-white to-gray-50">
  <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-16 lg:px-8 ">
    <div class="text-lg  max-w-prose mx-auto">
      <h1>
        <span
          class="block text-base text-center text-sky-600 font-semibold tracking-wide uppercase"
          >Главная</span
        >
        <span
          class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-red-700 to-blue-700 sm:text-4xl"
          >Ремонт квартир недорого и качественно</span
        >
      </h1>
      <p class="mt-3 max-w-3xl text-lg text-gray-900 text-center">
        Компания "Новострой" предлагает услуги по ремонту квартир в Москве. <br
        />
        Выполняем работы "под ключ" или частично.
      </p>
    </div>

    <div class="">
      <div
        class="max-w-2xl mx-auto px-4 py-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8"
      >
        <!-- Details section -->
        <section aria-labelledby="details-heading">
          <div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            <div>
              <div
                class="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden"
              >
                <img
                  src="objects/4.jpg"
                  alt="ремонт"
                  class="w-full object-center object-cover"
                />
              </div>
              <div class="prose prose-sky">
                <h3 class="mt-8 text-base text-gray-800">
                  По желанию заказчика была отремонтирована только одна комната
                  и выполнены следующие работы по капитальному ремонту:
                </h3>
                <ul>
                  <li>
                    Замена деревянного оконного блока на двух камерный
                    стеклопакет от фирмы «Rehau»
                  </li>
                  <li>
                    Произведен демонтаж старого деревянного напольного покрытия
                    с последующим выравниванием полов и выкладки нового
                    напольного покрытия в виде «Ламината» от фирмы «Egger»
                  </li>
                  <li>
                    Демонтаж обоев и штукатурки на стенах с последующим
                    выравниванием стен и поклейкой обоев
                  </li>
                  <li>
                    Замена старых труб и радиатора отопления на новые
                    пластиковые
                  </li>
                  <li>
                    Возведен, обшит и покрашен каркас для двух уровневого
                    потолка, установлено полотно натяжного потолка, также была
                    произведена полная замена электрики с выведением новых групп
                    розеток, выключателей и установлено освещение в виде спотов
                  </li>
                  <li>
                    Также нашими сотрудниками были выполнены работы по сборке и
                    установке мебели, установке телевизора, установке карниза,
                    штор и тюлей
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div
                class="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden"
              >
                <img
                  src="objects/9.jpg"
                  alt="ремонт"
                  class="w-full object-center object-cover"
                />
              </div>
              <div class="prose prose-sky">
                <h3 class="mt-8 text-base text-gray-800">
                  Так как квартира нам досталась от застройщика то были
                  выполнены следующие работы по ремонту "под ключ":
                </h3>
                <ul>
                  <li>
                    По желанию клиента ремонт был выполнен в стилистике «Лофт»
                  </li>
                  <li>
                    Были окрашены стены грунтовкой глубокого проникновения, для
                    предотвращения осыпания и маркости стен
                  </li>
                  <li>Заменена дверная коробка межкомнатных дверей</li>
                  <li>Заменен радиатор отопления на новый от фирмы «Royal»</li>
                  <li>
                    Возведен, обшит и покрашен каркас для двух уровневого
                    потолка, покрашен потолок, по периметру потолка было
                    выполнено освещение в виде светодиодной ленты подключенная
                    через «диммер» для регулирования яркости светового потока и
                    выбора цвета
                  </li>
                  <li>
                    Возведена ниша под телевизор из ГВЛ с подсветкой, обшитая
                    ламинатом от фирмы «Kronotex»
                  </li>
                  <li>
                    Также нашими сотрудниками были выполнены работы по сборке и
                    установке мебели, монтажу плазменного телевизора, установке
                    карниза и штор
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <div class="mt-12">
      <div
        class="bg-gradient-to-br from-sky-600 via-sky-800 to-pink-700 pt-12 sm:pt-16 rounded-lg"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-5xl mx-auto text-center ">
            <h2 class="text-4xl font-extrabold text-gray-50 sm:text-5xl">
              Мы предлагаем качественный ремонт квартир в Москве
            </h2>
            <p class="mt-3 text-xl text-cyan-50 sm:mt-4">
              В нашей компании работают только специалисты в своём деле и мы
              уверены в их работе
              <!--					<br> Строительство малоэтажных конструкций, бань, дач и технических сооружений.-->
            </p>
          </div>
        </div>
        <div class="mt-10 pb-12 sm:pb-16">
          <div class="relative">
            <!--						<div class="absolute inset-0 h-1/2 bg-gradient-to-r from-sky-500 via-sky-800 to-sky-500 pt-12 ro rounded-b-lg"></div>-->
            <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="max-w-4xl mx-auto">
                <dl
                  class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3"
                >
                  <div
                    class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r"
                  >
                    <dt
                      class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500"
                    >
                      гарантии
                    </dt>
                    <dd class="order-1 text-5xl font-extrabold text-cyan-600">
                      100%
                    </dd>
                  </div>
                  <div
                    class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r"
                  >
                    <dt
                      class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500"
                    >
                      поддержка
                    </dt>
                    <dd class="order-1 text-5xl font-extrabold text-cyan-600">
                      24/7
                    </dd>
                  </div>
                  <div
                    class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l"
                  >
                    <dt
                      class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500"
                    >
                      объекта
                    </dt>
                    <dd class="order-1 text-5xl font-extrabold text-cyan-600">
                      483
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <dl
      class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8"
    >
      {#each Benefits as { title, text }}
        <div class="relative">
          <dt>
            <!-- Heroicon name: outline/check -->
            <svg
              class="absolute h-6 w-6 text-cyan-900"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p class="ml-9 text-lg leading-6 font-medium text-cyan-900">
              {title}
            </p>
          </dt>
          <dd class="mt-2 ml-9 text-base text-gray-500">{text}</dd>
        </div>
      {/each}
    </dl>
  </div>
</div>

<section class="">
  <div
    class="py-24 bg-gradient-to-b from-white via-white to-gray-50 overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
      <div class="text-base max-w-prose mx-auto lg:max-w-none">
        <h2
          class="text-base text-sky-600 font-semibold tracking-wide uppercase"
        >
          Наша услуга
        </h2>
        <p
          class="mt-2 text-4xl leading-8 font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-red-700 to-blue-700 sm:text-6xl"
        >
          Ремонт квартир в Москве любой сложности
        </p>
      </div>
      <div
        class="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72"
      >
        <p class="py-1 text-lg text-gray-500">
          Время от времени у каждого возникает необходимость облагородить свое
          родное помещение. Если и для вас настал такой момент, доверьте эту
          работу настоящим профессионалам.
        </p>
        <p class="py-1 text-lg text-gray-500">
          Опытные квалифицированные сотрудники компании «Новострой» выполнят
          работы любой сложности. Для нас совершенно нет разницы, кухня ли это,
          гостиная, ванная, спальня, или же вся квартира целиком.
        </p>
        <p class="py-1 text-lg text-gray-500">
          Качественный ремонт квартир осуществляется, в первую очередь, чтобы вы
          могли жить в максимально комфортных условиях.
        </p>
      </div>
      <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
        <div class="relative z-10">
          <div class="prose prose-sky text-gray-500 mx-auto lg:max-w-none">
            <p class="text-lg">Для этого наши специалисты:</p>
            <ul>
              <li>полностью демонтируют отделку</li>
              <li>
                сносят и устанавливают стены, а также перегородки, используя
                самые качественные материалы
              </li>
              <li>выравнивают потолки и стены</li>
              <li>осуществляют прокладку звукоизоляции</li>
              <li>окрашивают и грунтуют поверхность</li>
              <li>монтируют окна и двери</li>
              <li>
                самостоятельно устанавливают мебель по ранее согласованному
                проекту, а также выполняют все остальные работы
              </li>
            </ul>
            <p>
              Мы также тщательно следим за каждым сотрудником. К нам просто не
              может попасть непрофессионал или человек, который относится к
              своей работе легкомысленно.
            </p>
            <h3 class="text-sky-900">Мы готовы вам помочь</h3>
            <p>
              Запишитесь на бесплатную консультацию или задайте ваш вопрос в
              чате. Мы всегда будем рады общению с вами и ответим на любые
              вопросы
            </p>
          </div>
          <!--					<div class="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">-->
          <!--						<div class="rounded-md shadow">-->
          <!--							<a href="/" class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-700 hover:bg-sky-700"> Получить консультацию </a>-->
          <!--						</div>-->
          <!--&lt;!&ndash;						<div class="rounded-md shadow ml-4">&ndash;&gt;-->
          <!--&lt;!&ndash;							<a href="#" class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-sky-600 bg-white hover:bg-gray-50"> Learn more </a>&ndash;&gt;-->
          <!--&lt;!&ndash;						</div>&ndash;&gt;-->
          <!--					</div>-->
        </div>
        <div
          class="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none"
        >
          <svg
            class="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
            />
          </svg>
          <blockquote
            class="relative bg-gradient-to-b from-slate-50 via-slate-50 to-sky-600 rounded-lg shadow-lg"
          >
            <div class="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
              <img src="/logo.png" alt="logo" class="h-16" />
              <div class="relative text-lg text-gray-700 font-medium mt-8">
                <svg
                  class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path
                    d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
                  />
                </svg>
                <p class="relative">
                  Здравствуйте! Я Ваш личный помощник! Могу ответить на все
                  интересующие Вас вопросы. Вы можете обратиться ко мне по
                  телефону, написать письмо на электронную почту, telegram, либо
                  написать на сайте через форму обратной связи. В ожидании
                  обратной связи!
                </p>
              </div>
            </div>
            <div
              class="relative flex items-center sm:items-start bg-sky-700 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10"
            >
              <div
                class="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2"
              >
                <img
                  class="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-purple-300"
                  src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80"
                  alt=""
                />
              </div>
              <div
                class="relative ml-4 text-white font-semibold leading-6 sm:ml-24 sm:pl-1"
              >
                <p class="font-semibold sm:inline">
                  Ваш менеджер, Татьяна Демидова
                </p>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  </div>

  <!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')

  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          'warm-gray': colors.warmGray,
          sky: colors.sky,
          cyan: colors.cyan,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->

  <!-- This example requires Tailwind CSS v2.0+ -->

  <!--	<div class="bg-white">-->
  <!--		<div class="max-w-7xl mx-auto py-24 sm:py-32 sm:px-2 lg:px-4">-->
  <!--			<div class="max-w-2xl mx-auto px-4 lg:max-w-none">-->
  <!--				<div class="max-w-3xl">-->
  <!--					<h2 class="font-semibold text-gray-500">Стилистика</h2>-->
  <!--					<p class="mt-2 text-3xl font-extrabold tracking-tight text-sky-700 sm:text-5xl">Выбирайте стиль по душе</p>-->
  <!--					<p class="mt-4 text-gray-500">Интерьер дома это отражение характера хозяина. Выбипайте стиль ремонта по вашему желанию и живите в комфортном для вас уюте.</p>-->
  <!--				</div>-->

  <!--				<div class="space-y-16 pt-10 mt-10 border-t border-gray-200 sm:pt-16 sm:mt-16">-->
  <!--					<div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center">-->
  <!--						<div class="mt-6 lg:mt-0 lg:col-span-5 xl:col-span-4">-->
  <!--							<h3 class="text-2xl font-medium text-cyan-700">Минимализм</h3>-->
  <!--							<p class="mt-2 text-sm text-gray-500">The Drawstring Canister is water and tear resistant with durable canvas construction. This bag holds up to the demands of daily use while keeping your snacks secure.</p>-->
  <!--						</div>-->
  <!--						<div class="flex-auto lg:col-span-7 xl:col-span-8">-->
  <!--							<div class="aspect-w-5 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden">-->
  <!--								<img src="https://tailwindui.com/img/ecommerce-images/product-feature-04-detail-03.jpg" alt="Printed photo of bag being tossed into the sky on top of grass." class="object-center object-cover">-->
  <!--							</div>-->
  <!--						</div>-->
  <!--					</div>-->

  <!--					<div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center">-->
  <!--						<div class="mt-6 lg:mt-0 lg:col-span-5 xl:col-span-4">-->
  <!--							<h3 class="text-2xl font-medium text-cyan-700">Лофт</h3>-->
  <!--							<p class="mt-2 text-sm text-gray-500">Everything you need, nothing you don&#039;t. This bag has the simple, contemporary design that enables you to tell everyone you know about how essentialism is the only rational way to live life.</p>-->
  <!--						</div>-->
  <!--						<div class="flex-auto lg:col-span-7 xl:col-span-8">-->
  <!--							<div class="aspect-w-5 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden">-->
  <!--								<img src="https://tailwindui.com/img/ecommerce-images/product-feature-04-detail-01.jpg" alt="Double stitched black canvas hook loop." class="object-center object-cover">-->
  <!--							</div>-->
  <!--						</div>-->
  <!--					</div>-->

  <!--					<div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center">-->
  <!--						<div class="mt-6 lg:mt-0 lg:col-span-5 xl:col-span-4">-->
  <!--							<h3 class="text-2xl font-medium text-cyan-700">Классика</h3>-->
  <!--							<p class="mt-2 text-sm text-gray-500">Never lose your snacks again with our patent-pending snack stash pocket system. With dedicated pouches for each of your snacking needs, the Drawstring Canister unlocks new levels of efficiency and convenience.</p>-->
  <!--						</div>-->
  <!--						<div class="flex-auto lg:col-span-7 xl:col-span-8">-->
  <!--							<div class="aspect-w-5 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden">-->
  <!--								<img src="https://tailwindui.com/img/ecommerce-images/product-feature-04-detail-02.jpg" alt="Black canvas body with chrome zipper and key ring." class="object-center object-cover">-->
  <!--							</div>-->
  <!--						</div>-->
  <!--					</div>-->
  <!--				</div>-->
  <!--			</div>-->
  <!--		</div>-->
  <!--	</div>-->
</section>

<div class="bg-gradient-to-b from-white via-white to-gray-50">
  <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl">
    <div class="relative rounded-lg overflow-hidden lg:h-96">
      <div class="absolute inset-0">
        <img
          src="https://cdn.tze1.ru/l9/0c97d4e5-61d2-11e9-8dc3-e8611f100fce/1082122.png"
          alt=""
          class="w-full h-full object-center object-cover"
        />
      </div>
      <div aria-hidden="true" class="relative w-full h-96 lg:hidden" />
      <div aria-hidden="true" class="relative w-full h-32 lg:hidden" />
      <div
        class="absolute inset-x-0 bottom-0 bg-sky-800 bg-opacity-70 p-6 rounded-bl-lg rounded-br-lg backdrop-filter backdrop-blur sm:flex sm:items-center sm:justify-between lg:inset-y-0 lg:inset-x-auto lg:w-96 lg:rounded-tl-lg lg:rounded-br-none lg:flex-col lg:items-start"
      >
        <div>
          <h2 class="text-xl font-bold text-white">Бесплатная услуга</h2>
          <p class="mt-1 text-sm text-gray-300">
            Консультация на объекте для получения более подробной информации и
            рекомендуемых работах.
          </p>
        </div>
        <button
          on:click={changeVisibleFormConsultation}
          class="mt-6 flex-shrink-0 flex bg-white bg-opacity-0 py-3 px-4 border border-white border-opacity-25 rounded-md items-center justify-center text-base font-medium text-white hover:bg-opacity-10 sm:mt-0 sm:ml-8 lg:ml-0 lg:w-full transition ease-in-out delay-100 hover:scale-105 duration-500"
          >Записаться на консультацию</button
        >
      </div>
    </div>
  </div>
</div>

<Consultation />
