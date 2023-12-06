<script>
	// @ts-nocheck
	import Iconify from '@iconify/svelte';
	import { page } from '$app/stores';
	import { Tabbar, TabbarLink, Icon } from 'konsta/svelte';

	const menu = [
		{
			label: 'Home',
			path: '/home',
			icon: 'fluent:home-12-regular',
			iconActive: 'fluent:home-12-filled'
		},
		{
			label: 'Feeds',
			path: '/feeds',
			icon: 'mingcute:chat-1-line',
			iconActive: 'mingcute:chat-1-fill'
		},
		{
			label: 'Transaction',
			path: '/transaction',
			icon: 'mingcute:bill-line',
			iconActive: 'mingcute:bill-fill'
		},
		{
			label: 'Profile',
			path: '/profile',
			icon: 'mingcute:user-2-line',
			iconActive: 'mingcute:user-2-fill'
		}
	];
</script>

<!-- <div class="mt-44"></div> -->
<Tabbar class="left-0 bottom-0 fixed" labels icons>
	{#each menu as link}
		<TabbarLink
			label={link.label}
			href={$page.url.pathname !== link.path ? link.path : undefined}
			active={$page.url.pathname === link.path}
		>
			<svelte:fragment slot="icon">
				<Icon slot="icon">
					{#if $page.url.pathname === link.path}
						<Iconify icon={link.iconActive} class="text-2xl text-primary" />
					{:else}
						<Iconify icon={link.icon} class="text-2xl" />
					{/if}
				</Icon>
			</svelte:fragment>
		</TabbarLink>
	{/each}
</Tabbar>
