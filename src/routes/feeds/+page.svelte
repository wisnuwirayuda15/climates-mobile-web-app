<script lang="ts">
	import { Page, Block, Button, Navbar, Fab, Popup } from 'konsta/svelte';
	import PostCard from '$lib/components/PostCard.svelte';
	import Avatar from '$lib/components/Avatar.svelte';
	import FormInput from '$lib/components/FormInput.svelte';
	import Iconify from '@iconify/svelte';
	let createPost: boolean = false;
	let postFormValue: string = '';
	let postForm: HTMLElement;
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
		<h2 class="absolute left-0 right-0 grid place-items-center">Feeds</h2>
		<Avatar className="mr-4" slot="right" imageOnly />
		<div slot="subnavbar" class="w-full">
			<FormInput name="search" placeholder="Search feeds..." icon="ic:baseline-search" />
		</div>
	</Navbar>

	<Block>
		<div class="grid grid-cols-1 gap-5">
			{#each Array(10) as _, index (index)}
				<PostCard></PostCard>
			{/each}
		</div>
	</Block>

	<Fab
		colors={{
			bgMaterial: 'bg-primary'
		}}
		onClick={() => {
			createPost = true;
			postForm.focus();
		}}
		class="fixed right-4-safe bottom-24-safe z-30 rounded-full"
	>
		<Iconify icon="icon-park-outline:plus" slot="icon" class="text-white" />
	</Fab>

	<Popup
		opened={createPost}
		onBackdropClick={() => {
			createPost = false;
		}}
	>
		<Page>
			<Navbar centerTitle transparent>
				<Button
					onClick={() => {
						createPost = false;
					}}
					slot="left"
					class="aspect-square h-max w-auto p-0 m-0"
					clear
					inline
					href="/feeds"
				>
					<Iconify icon="tabler:x" class="text-3xl text-[black]" />
				</Button>
				<Button slot="right" class="mr-3" inline disabled={!postFormValue}>Send</Button>
			</Navbar>

			<Block>
				<Avatar className="ml-2" />
				<textarea
					id="post"
					rows="10"
					bind:value={postFormValue}
					bind:this={postForm}
					class="mt-5 w-full rounded-lg bg-transparent !outline-transparent !border-transparent !ring-transparent"
					placeholder="What's going on?"
				></textarea>
			</Block>
		</Page>
	</Popup>
	<div class="mb-44"></div>
</Page>
