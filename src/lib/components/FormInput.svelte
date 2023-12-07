<script lang="ts">
	import Iconify, { type IconifyIcon } from '@iconify/svelte';
	import type { HTMLInputTypeAttribute } from 'svelte/elements';
	export let name: string;
	export let className: string = '';
	export let label: string = '';
	export let type: HTMLInputTypeAttribute = 'text';
	export let value: any = '';
	export let icon: string | IconifyIcon = '';
	export let action: boolean = false;
	export let actionIcon: string | IconifyIcon = '';
	export let actionOnCLick = () => {};
	export let placeholder: string = '';
	export let helper: string = '';
	export let rounded: boolean = false;
	export let autofocus: boolean = false;
	export let required: boolean = false;
	export let disabled: boolean = false;
	export let autocomplete: boolean = false;
	export let textarea: boolean = false;
</script>

<!-- svelte-ignore a11y-autofocus -->
<div class="text-start">
	<label for="{name}-input" class="block text-sm font-medium leading-6 text-gray-900">{label}</label
	>
	<div class="relative rounded-md shadow-sm">
		{#if icon}
			<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
				<span class="sm:text-sm">
					<Iconify class="w-4 h-4" {icon} />
				</span>
			</div>
		{/if}

		{#if textarea}
			<textarea
				{name}
				{autofocus}
				{placeholder}
				{disabled}
				{required}
				autocomplete={!autocomplete ? 'off' : 'on'}
				class="transition-all rounded-md bg-primary bg-opacity-5 block w-full border-0 py-2 pr-20 ring-1 ring-inset ring-md-light-surface-variant focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 {className}"
				>{value}</textarea
			>
		{:else}
			<input
				{type}
				{name}
				{value}
				{autofocus}
				{placeholder}
				{disabled}
				{required}
				id="{name}-input"
				autocomplete={!autocomplete ? 'off' : 'on'}
				class="transition-all bg-primary bg-opacity-5 block w-full border-0 py-2 pr-20 ring-1 ring-inset ring-md-light-surface-variant focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6
        {icon && 'pl-9'} {rounded ? 'rounded-full' : 'rounded-md'} {className}"
			/>
		{/if}

		<div class="absolute inset-y-0 right-0 flex items-center">
			{#if action}
				<button
					type="button"
					class="w-auto inline-flex items-center px-3 text-sm text-gray-900 bg-transparent border-none rounded-e-md dark:bg-gray-600 dark:text-gray-400"
					on:click={actionOnCLick}
				>
					<Iconify class="w-4 h-4 text-gray-500 dark:text-gray-400" icon={actionIcon} />
				</button>
			{/if}
		</div>
	</div>

	{#if helper}
		<p class="text-sm text-gray-500 dark:text-gray-400">
			{helper}
		</p>
	{/if}
</div>
