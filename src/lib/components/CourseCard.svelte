<script lang="ts">
	import { Card, Button } from 'konsta/svelte';
	import { faker } from '@faker-js/faker';
	import Iconify from '@iconify/svelte';
	export let image: string = faker.image.url();
	export let title: string | undefined = undefined;
	export let text: string = faker.lorem.paragraph();
	export let buttonText: string = 'Buy';
</script>

<Card outline contentWrap={false} raised margin="m-0" class="rounded-md h-full bg-md-light-surface">
	<div class="flex">
		<div
			class="flex-none w-[100px] flex items-center justify-center text-white ios:font-bold"
			style="background-image: url({image})"
		>
			<Iconify icon="pajamas:nature" class="text-white absolute text-3xl" />
		</div>
		<div class="p-4 grid gap-2">
			<h3 class={title ?? 'capitalize'}>{title ?? faker.lorem.words({ min: 3, max: 6 })}</h3>
			<p>{text}</p>
			<Button class="mt-3">{buttonText}</Button>
		</div>
	</div>
</Card>
