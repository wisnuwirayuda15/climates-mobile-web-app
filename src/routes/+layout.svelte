<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { App } from 'konsta/svelte';
	import { page } from '$app/stores';
	import CustomTabbar from '$lib/components/Tabbar.svelte';
	import '../app.css';

	const withTabbar = ['/home', '/feeds', '/transaction', '/profile'];
	const navigateAnimation: boolean = true;

	onNavigate(() => {
		if (document.startViewTransition && navigateAnimation) {
			return new Promise((resolve) => {
				document.startViewTransition &&
					document.startViewTransition(async () => {
						resolve();
						//@ts-ignore
						await navigation.complete;
					});
			});
		}
	});
</script>

<App theme="material" safeAreas class="select-none">
  <slot />

  {#if withTabbar.includes($page.url.pathname)}
    <CustomTabbar></CustomTabbar>
  {/if}
</App>
