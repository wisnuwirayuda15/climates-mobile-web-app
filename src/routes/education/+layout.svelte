<script lang="ts">
	import { Page, Navbar, Button, Link, Toolbar } from 'konsta/svelte';
	import { page } from '$app/stores';
	import Avatar from '$lib/components/Avatar.svelte';
	import FormInput from '$lib/components/FormInput.svelte';
	import Iconify from '@iconify/svelte';
	import { goto } from '$app/navigation';

	const tab = [
		{
			label: 'Articles',
			path: '/education/articles'
		},
		{
			label: 'Courses',
			path: '/education/courses'
		},
		{
			label: 'Your Courses',
			path: '/education/your-courses'
		}
	];
</script>

<Page>
	<Navbar centerTitle transparent innerClass="mb-12" class="border-b-2">
		<Button
			slot="left"
			class="aspect-square h-max w-auto p-0 m-0"
			clear
			inline
			onClick={() => goto('/home')}
		>
			<Iconify icon="fluent:chevron-left-32-filled" class="text-3xl text-[black]" />
		</Button>
		<h2 class="absolute left-0 right-0 grid place-items-center">Education</h2>
		<Avatar className="mr-4" slot="right" imageOnly />
		<div slot="subnavbar" class="w-full -translate-y-5">
			<FormInput name="search" placeholder="Search..." icon="ic:baseline-search" />
			<Toolbar bgClass="bg-transparent" class="mt-2">
				{#each tab as link}
					<Link
						toolbar
						onClick={() => {
							goto(link.path);
						}}
						class="transition-all {$page.url.pathname === link.path && 'border-primary border-b-4'}"
						>{link.label}</Link
					>
				{/each}
			</Toolbar>
		</div>
	</Navbar>
	<slot />
</Page>
