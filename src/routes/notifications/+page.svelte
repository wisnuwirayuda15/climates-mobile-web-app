<script lang="ts">
	import { Page, Block, Button, Navbar } from 'konsta/svelte';
	import Notification from '$lib/components/Notification.svelte';
	import Iconify from '@iconify/svelte';
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
		<h2 class="absolute left-0 right-0 grid place-items-center">Notifications</h2>
	</Navbar>

	<Block>
		<div class="grid grid-cols-1 gap-5">
			{#each Array(3) as _, index (index)}
				<Notification></Notification>
			{/each}
		</div>
	</Block>
</Page>
