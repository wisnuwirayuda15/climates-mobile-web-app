<script lang="ts">
	import { Block } from 'konsta/svelte';
	import CourseCard from '$lib/components/CourseCard.svelte';
	import { faker } from '@faker-js/faker';
</script>

<Block>
	<div class="grid grid-cols-1 gap-5">
		{#each Array(10) as _, index (index)}
			<CourseCard>
      </CourseCard>
		{/each}
	</div>
</Block>
