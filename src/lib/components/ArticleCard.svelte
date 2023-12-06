<script lang="ts">
	import { Card } from 'konsta/svelte';
	import { faker } from '@faker-js/faker';
	export let image: string = faker.image.url();
	export let title: string = faker.lorem.lines({ min: 1, max: 1 });
	export let text: string = faker.lorem.paragraphs(1);
</script>

<Card outline contentWrap={false} raised margin="m-0" class="rounded-md h-full bg-md-light-surface">
	<div>
		<div
			class="h-40 flex items-end text-white ios:font-bold bg-cover bg-center material:text-[22px]"
			style="background-image: url({image})"
		></div>
		<div class="p-4 grid gap-2">
			<h3>{title}</h3>
			<p>{text}</p>
		</div>
	</div>

	<div slot="footer">
    <slot name='footer'></slot>
	</div>
</Card>
