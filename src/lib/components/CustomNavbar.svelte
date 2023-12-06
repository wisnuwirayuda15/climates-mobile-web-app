<script lang="ts">
	import { Page, Block, Button, Navbar, Fab, Popup } from 'konsta/svelte';
	import Avatar from '$lib/components/Avatar.svelte';
	import FormInput from '$lib/components/FormInput.svelte';
	import Iconify from '@iconify/svelte';
</script>

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
