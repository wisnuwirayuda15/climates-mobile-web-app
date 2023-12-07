<script lang="ts">
	import { Block } from 'konsta/svelte';
	import CourseCard from '$lib/components/CourseCard.svelte';
</script>

<Block>
	<div class="grid grid-cols-1 gap-5">
		{#each Array(10) as _, index (index)}
			<CourseCard href="/education/courses/detail" buttonText="See more" />
		{/each}
	</div>
</Block>
