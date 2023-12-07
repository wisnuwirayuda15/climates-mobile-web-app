<script lang="ts">
	import { Block, Button } from 'konsta/svelte';
	import ArticleCard from '$lib/components/ArticleCard.svelte';
	import { faker } from '@faker-js/faker';
</script>

<Block>
	<div class="grid grid-cols-1 gap-5">
		{#each Array(10) as _, index (index)}
			<ArticleCard>
				<div slot="footer" class="flex justify-between items-end">
					<p class="font-bold">{faker.finance.amount({ min: 1, max: 10, dec: 3 })} views</p>
					<Button href="/education/articles/detail" inline outline class="ios:hidden h-7">Read more</Button>
				</div>
			</ArticleCard>
		{/each}
	</div>
</Block>
