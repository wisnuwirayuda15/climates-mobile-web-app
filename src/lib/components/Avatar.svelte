<script lang="ts">
	import { faker } from '@faker-js/faker';
	export let name: string = '';
	export let src: string = '';
	export let className: string = '';
	export let imageOnly: boolean = false;
</script>

<div class="flex gap-3 items-center {className}">
		<div class="w-8 rounded-full ring-2 ring-primary ring-offset-1">
			<img src={src === '' ? faker.image.avatarLegacy() : src} alt="avatar" class="rounded-full"/>
		</div>
	{#if !imageOnly}
		<p class="font-bold">{name === '' ? faker.person.fullName() : name}</p>
	{/if}
</div>
