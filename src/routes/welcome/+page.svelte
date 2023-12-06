<script lang="ts">
	import { onMount } from 'svelte';
	import { Page, Button, Block } from 'konsta/svelte';
	import Welcome1 from '$lib/img/welcome-1.svg';
	import Welcome2 from '$lib/img/welcome-2.svg';
	import Welcome3 from '$lib/img/welcome-3.svg';
	import Welcome4 from '$lib/img/welcome-4.svg';
	import Swiper from 'swiper';
	import { Pagination } from 'swiper/modules';
	import 'swiper/css';
	import 'swiper/css/pagination';
	let slideEnd: boolean = false;
	let swiperNext: HTMLElement;
	const welcome = [
		{
			img: Welcome1,
			title: 'Increasing Consumer Awareness of Carbon Footprints',
			text: 'Effort to raise consumer awareness about carbon footprints, aiming to inform and empower individuals for more sustainable choices, ultimately reducing environmental impact through education and outreach.'
		},
		{
			img: Welcome2,
			title: 'Reducing Consumer Carbon Footprints',
			text: 'The campaign strives to educate and empower consumers to make sustainable choices, reducing their carbon footprints through awareness initiatives, educational resources, and collaborative efforts for a greener future.'
		},
		{
			img: Welcome3,
			title: 'Monetizing Apps with a Sustainable Business Model',
			text: 'Generate app revenue sustainably by prioritizing ethical practices and a positive user experience. This involves implementing mindful monetization methods and considering broader societal and environmental impacts for a responsible digital ecosystem.'
		},
		{
			img: Welcome4,
			title: 'Innovation and Sustainable Product Development',
			text: 'Innovation and Sustainable Product Development integrates creativity with eco-friendly practices, emphasizing novel ideas and environmentally responsible approaches for a more sustainable future.'
		}
	];

	// unfotunetely, this library doesn't have native supports for Svelte, so I have to do this sh*t in traditional way
	// https://swiperjs.com/svelte
	onMount(() => {
		const swiper = new Swiper('.swiper', {
			modules: [Pagination],
			speed: 500,
			pagination: {
				el: '.swiper-pagination',
				clickable: true
				// bulletClass: 'bullet',
				// bulletActiveClass: 'bullet-active'
			}
		});
		swiperNext.addEventListener('click', () => {
			swiper.slideNext();
		});
		swiper.on('reachEnd', function () {
			setTimeout(() => {
				slideEnd = true;
			}, 500);
		});
		swiper.on('slidePrevTransitionEnd', function () {
			slideEnd = false;
		});
	});
</script>

<Page>
	<div class="welcome-slider swiper">
		<div class="swiper-wrapper mb-5">
			{#each welcome as data}
				<div class="swiper-slide">
					<Block>
						<div class="text-center grid grid-cols-1 gap-3">
							<center>
								<img alt={data.title} src={data.img} class="w-[90%] h-auto" />
							</center>
							<h2>{data.title}</h2>
							<p>{data.text}</p>
						</div>
					</Block>
				</div>
			{/each}
		</div>
		<div class="swiper-pagination mt-5 block"></div>
	</div>

	<style type="text/css">
		.swiper-pagination-bullet {
			--tw-bg-opacity: 1;
			transition-property: all;
			transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
			transition-duration: 300ms;
		}

		.swiper-pagination-bullet-active {
			--tw-bg-opacity: 1;
			background-color: rgb(var(--k-color-primary) / var(--tw-bg-opacity));
			border-radius: 9999px;
			width: 1.5rem /* 24px */;
			transition-property: all;
			transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
			transition-duration: 300ms;
		}
	</style>

	<Block>
		<div class="{slideEnd ? undefined : 'hidden'} grid grid-cols-1 gap-3">
			<Button raised href="/register">Sign Up</Button>
			<Button outline raised href="/login">Login</Button>
		</div>
		<div bind:this={swiperNext} role="button" class={slideEnd ? 'hidden' : undefined}>
			<Button raised>Next</Button>
		</div>
	</Block>
</Page>
