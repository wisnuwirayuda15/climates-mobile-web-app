<script lang="ts">
	import { Navbar, NavbarBackLink, Link, Icon } from 'konsta/svelte';
	export let title: string;
	export let centerTitle: boolean = false;
	export let backDefault: boolean = false;
</script>

<Navbar {title} class="top-0 sticky" {centerTitle}>
	{#if backDefault}
		<NavbarBackLink slot="left" text="Back" onClick={() => history.back()} />
	{:else if $$slots.backIcon}
		<Link navbar iconOnly slot="left" onClick={() => history.back()}>
			<Icon>
				<slot name="backIcon" />
			</Icon>
		</Link>
	{/if}
  <slot name="search" slot="subnavbar"></slot>
</Navbar>
