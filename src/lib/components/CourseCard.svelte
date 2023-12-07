<script lang="ts">
	import { Card, Button, Progressbar } from 'konsta/svelte';
	import { faker } from '@faker-js/faker';
	import Iconify from '@iconify/svelte';
	export let image: string = faker.image.url();
	export let title: string | undefined = undefined;
	export let text: string = faker.lorem.paragraph();
	export let buttonText: string = 'Button';
	export let href: string;
	export let progress: number | undefined = undefined;
	export let price: string = `Rp ${faker.finance.amount({ min: 100, max: 999, dec: 3 })}`;
</script>

<Card outline contentWrap={false} raised margin="m-0" class="rounded-md h-full bg-md-light-surface">
	<div class="flex">
		<div
			class="flex-none w-[100px] flex items-center justify-center text-white ios:font-bold"
			style="background-image: url({image})"
		>
			<Iconify icon="pajamas:nature" class="text-white absolute text-3xl" />
		</div>
		<div class="p-4 w-full">
			<h3 class="{title ?? 'capitalize'} mb-4">{title ?? faker.lorem.words({ min: 3, max: 6 })}</h3>

			{#if progress}
				<div class="mt-3 w-full">
					<p class="font-bold">{progress}% Complete</p>
					<Progressbar progress={progress * 0.01} class="rounded-full h-2 mt-1"/>
				</div>
			{:else}
				<p>{text}</p>
				<p class="text-lg font-bold mt-4">{price}</p>
			{/if}

			<Button class="mt-3" {href}>{buttonText}</Button>
		</div>
	</div>
</Card>
