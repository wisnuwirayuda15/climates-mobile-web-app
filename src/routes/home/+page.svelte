<script lang="ts">
	import { Page, Block, Button, Link, Navbar, Dialog, DialogButton } from 'konsta/svelte';
	import { onMount } from 'svelte';
	import { faker } from '@faker-js/faker';
	import PostCard from '$lib/components/PostCard.svelte';
	import ArticleCard from '$lib/components/ArticleCard.svelte';
	import Avatar from '$lib/components/Avatar.svelte';
	import Iconify from '@iconify/svelte';
	import Swiper from 'swiper';
	import 'swiper/css';
	let dialog: boolean = false;

	const feature = [
		{
			label: 'Carbon Calculator',
			icon: 'lets-icons:critical-fill',
			iconSize: '2.2rem'
		},
		{
			label: 'Community',
			icon: 'fa-solid:users'
		},
		{
			label: 'Education',
			icon: 'mingcute:mortarboard-fill',
			href: '/education/articles'
		},
		{
			label: 'Event',
			icon: 'solar:ticket-bold'
		},
		{
			label: 'Carbon Market',
			icon: 'lets-icons:bag-fill'
		},
		{
			label: 'Feedback Support',
			icon: 'mingcute:send-fill'
		},
		{
			label: 'Subscribe',
			icon: 'ion:wallet'
		},
		{
			label: 'Other',
			icon: 'radix-icons:dashboard'
		}
	];

	onMount(() => {
		const swiper = new Swiper('.swiper', {
			speed: 500
		});
	});
</script>

<Page>
	<Navbar transparent>
		<Avatar className="ml-4" slot="left" />
		<Button href="/notifications" slot="right" class="aspect-square h-fit w-auto" clear inline>
			<Iconify icon="zondicons:notification" class="text-2xl text-[black]" />
		</Button>
	</Navbar>

	<div class="grid grid-cols-1 gap-7">
		<Block margin="m-0">
			<img src={faker.image.url()} alt="home" class="rounded-md h-40 w-full my-8 object-cover shadow-md" />
			<div class="flex items-center justify-between mb-3">
				<h3>Today's Update</h3>
				<Button inline href="/feeds">See</Button>
			</div>
			<PostCard>
				<p>
					Empowering our future with eco-energy solutions! 🌿💡Let's harness the power of
					sustainable sources to create a greener and cleaner world.
				</p>
			</PostCard>
		</Block>

		<Block margin="m-0">
			<h3 class="mb-3">Our Feature</h3>
			<div class="grid grid-cols-4 gap-4">
				{#each feature as link}
					<Button
						outline={!link.hasOwnProperty('href') && true}
						raised
						class="h-full w-full aspect-square"
						href={link.href}
						tonal
						inline
						onClick={() => {
							if (!link.hasOwnProperty('href')) {
								dialog = true;
							}
						}}
					>
						<center>
							<Iconify
								icon={link.icon}
								class="text-2xl text-primary"
								style="font-size: {link.hasOwnProperty('iconSize') && link.iconSize};"
							/>
							<p class="text-primary text-xs mt-2">{link.label}</p>
						</center>
					</Button>
				{/each}
			</div>
		</Block>

		<div>
			<Block margin="m-0">
				<div class="flex items-center justify-between">
					<h3>Articles</h3>
					<Button inline href="/education/articles">See All</Button>
				</div>
			</Block>
			<div class="swiper">
				<div class="swiper-wrapper">
					{#each Array(5) as _, index (index)}
						<div class="swiper-slide">
							<Block class="h-full">
								<ArticleCard>
									<div slot="footer" class="flex justify-end">
										<Link class="material:hidden">Read more</Link>
										<Button inline raised class="ios:hidden">Read more</Button>
									</div>
								</ArticleCard>
							</Block>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<div class="mb-44"></div>

	<Dialog class="rounded-lg" opened={dialog} onBackdropClick={() => (dialog = false)}>
		<svelte:fragment slot="title">Sorry...</svelte:fragment>
		This feature is not available yet.
		<svelte:fragment slot="buttons">
			<DialogButton onClick={() => (dialog = false)}>OK</DialogButton>
		</svelte:fragment>
	</Dialog>
</Page>
