<script lang="ts">
	import { Card } from 'konsta/svelte';
	import { faker } from '@faker-js/faker';
	import Iconify from '@iconify/svelte';
	export let title: string = faker.lorem.lines({ min: 1, max: 1 });
</script>

<Card outline margin="m-0" raised>
	<div class="flex items-center gap-2 mb-2 h-full">
    <Iconify icon="lets-icons:message-fill" class="text-primary absolute text-3xl" />
		<h3 class="text-black text-lg pl-10">{title}</h3>
	</div>
	{#if $$slots.default}
		<slot />
	{:else}
		{faker.lorem.paragraphs(1)}
	{/if}
</Card>
