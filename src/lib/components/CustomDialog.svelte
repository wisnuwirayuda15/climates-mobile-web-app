<script lang="ts">
	import Iconify from '@iconify/svelte';
	import { Dialog, Button } from 'konsta/svelte';
	export let opened: boolean = false;
	export let title: string = 'Modal Title';
	export let text: string = 'Modal Text';
</script>

<Dialog class="rounded-lg bg-white" {opened} onBackdropClick={() => (opened = false)}>
	<Button
		onClick={() => {
			opened = false;
		}}
		class="aspect-square h-max w-auto p-0 m-0 absolute left-1 top-1"
		clear
		inline
	>
		<Iconify icon="tabler:x" class="text-2xl text-[black]" />
	</Button>
	<center>
		<slot name="img" />
		<h1 class="mb-3">{title}</h1>
		<p class="mb-7">{text}</p>
		<Button
			onClick={() => {
				opened = false;
			}}>OK</Button
		>
	</center>
</Dialog>

<style>
</style>
