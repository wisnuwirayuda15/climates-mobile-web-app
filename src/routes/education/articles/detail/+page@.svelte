<script lang="ts">
	import { Page, Block, Button, Navbar } from 'konsta/svelte';
	import { faker } from '@faker-js/faker';
	import Avatar from '$lib/components/Avatar.svelte';
	import Iconify from '@iconify/svelte';

	const title: string = faker.lorem.words({ min: 5, max: 10 });
	const text: string = faker.lorem.paragraphs(30);
	const img: string = faker.image.url();
	const views: string = faker.finance.amount({ min: 1, max: 10, dec: 3 });
	const date: string = `${faker.number.int({ min: 1, max: 31 })} ${faker.date.month()} 2023`;
</script>

<Page>
	<Navbar centerTitle transparent>
		<Button
			slot="left"
			class="aspect-square h-max w-auto p-0 m-0"
			clear
			inline
			onClick={() => history.back()}
		>
			<Iconify icon="fluent:chevron-left-32-filled" class="text-3xl text-[black]" />
		</Button>
		<h2 class="absolute left-0 right-0 grid place-items-center">Article</h2>
		<Avatar className="mr-4" slot="right" imageOnly />
	</Navbar>

	<Block>
		<div class="grid grid-cols-1 gap-7">
			<div>
				<img src={img} alt="home" class="rounded-md h-60 w-full object-cover shadow-md" />
				<h3 class="mt-3 capitalize">{title}</h3>
			</div>

			<div>
				<div class="flex items-center justify-between">
					<Avatar />
					<span class="text-gray-600">{date}</span>
				</div>
				<p class="mt-3 text-gray-600">{views} views</p>
			</div>

			<p>{text}</p>
		</div>
	</Block>
</Page>
