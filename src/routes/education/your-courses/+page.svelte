<script lang="ts">
	import { Block } from 'konsta/svelte';
	import CourseCard from '$lib/components/CourseCard.svelte';
	import { faker } from '@faker-js/faker';
</script>

<Block>
	<div class="grid grid-cols-1 gap-5">
		{#each Array(5) as _, index (index)}
			<CourseCard
				progress={faker.number.int({ min: 0, max: 100 })}
				href="/education/your-courses/detail"
				buttonText="Take Course"
			/>
		{/each}
	</div>
</Block>
