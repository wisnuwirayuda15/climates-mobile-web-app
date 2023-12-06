<script lang="ts">
	import { Block } from 'konsta/svelte';
	import ArticleCard from '$lib/components/ArticleCard.svelte';
	import { faker } from '@faker-js/faker';
</script>

<Block>
	<div class="grid grid-cols-1 gap-5">
		{#each Array(10) as _, index (index)}
			<ArticleCard>
        <p slot="footer">{faker.number.int({ min: 100, max: 10000 })} views</p>
      </ArticleCard>
		{/each}
	</div>
</Block>
