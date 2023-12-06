<script lang="ts">
	import { Card } from 'konsta/svelte';
	import { faker } from '@faker-js/faker';
	import Avatar from '$lib/components/Avatar.svelte';
	import Iconify from '@iconify/svelte';
	export let userName: string = '';
	export let userAvatar: string = '';
	export let date: string = `${faker.date.month({ abbreviated: true })} ${faker.number.int({ min: 1, max: 31 })}`;
	export let likes: number = faker.number.int({ min: 0, max: 100 });
	export let retweets: number = faker.number.int({ min: 0, max: 100 });
	export let comments: number = faker.number.int({ min: 0, max: 100 });

	let liked: boolean = false;
</script>

<Card outline margin="m-0" class="rounded-md" raised>
	<div slot="header" class="flex items-center">
		<Avatar name={userName} src={userAvatar} />
		<Iconify icon="mdi:dot" class="text-gray-500" />
		<span class="text-gray-600">{date}</span>
	</div>
	{#if $$slots.default}
		<slot />
	{:else}
		{faker.lorem.paragraphs(1)}
	{/if}
	<div slot="footer" class="flex gap-5">
		<button
			class="flex items-center gap-1 {liked && 'text-red-600'}"
			on:click={() => {
				liked = !liked;
			}}
		>
			<Iconify icon="icon-park-{liked ? 'solid' : 'outline'}:like" class="text-base" />
			<p>{likes}k</p>
		</button>
		<div class="flex items-center gap-1">
			<Iconify icon="ant-design:retweet-outlined" class="text-base" />
			<p>{retweets}k</p>
		</div>
		<div class="flex items-center gap-1">
			<Iconify icon="mdi:comments-text-outline" class="text-base" />
			<p>{comments}k</p>
		</div>
	</div>
</Card>
