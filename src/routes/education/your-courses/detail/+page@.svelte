<script lang="ts">
	import {
		Page,
		Block,
		Button,
		Navbar,
		List,
		ListItem,
		Toolbar,
		Popup,
		Toast,
		Preloader
	} from 'konsta/svelte';
	import { faker } from '@faker-js/faker';
	import Avatar from '$lib/components/Avatar.svelte';
	import Iconify from '@iconify/svelte';
	import PaymentQR from '$lib/img/payment-qr.svg';
	import Thanks from '$lib/img/thanks.svg';
	import FormInput from '$lib/components/FormInput.svelte';
	import CustomDialog from '$lib/components/CustomDialog.svelte';

	const course: string = faker.lorem.words({ min: 5, max: 7 });
	const code: string = faker.number.int({ min: 100000 }).toString();
	const text: string = faker.lorem.paragraph();
	const img: string = faker.image.url();
	const price: string = `Rp ${faker.finance.amount({ min: 100, max: 999, dec: 3 })}`;

	let payment: boolean = false;
	let qrLoading: boolean = false;
	let payLoading: boolean = false;
	let copy: boolean = false;
	let thanks: boolean = false;
	let purchased: boolean = false;
	let codeInput: any;
</script>

<Page>
	<Navbar centerTitle transparent>
		<Button
			slot="left"
			class="aspect-square h-max w-auto p-0 m-0"
			clear
			inline
			onClick={() => history.back()}
		>
			<Iconify icon="fluent:chevron-left-32-filled" class="text-3xl text-[black]" />
		</Button>
		<h2 class="absolute left-0 right-0 grid place-items-center">Course</h2>
		<Avatar className="mr-4" slot="right" imageOnly />
	</Navbar>

	<Block>
		<div class="grid grid-cols-1 gap-7">
			<div>
				<img src={img} alt="home" class="rounded-md h-60 w-full object-cover shadow-md" />
				<h3 class="mt-3 capitalize">{course}</h3>
			</div>

			<Avatar />

			<p>{text}</p>

			<List>
				<h3>Course</h3>
				{#each Array(10) as _, index (index)}
					<ListItem
						strongTitle
						title="Module {index + 1}"
						class="outline rounded-md my-3 outline-1 outline-md-light-outline bg-md-light-surface-3"
					>
						<p slot="text" class="capitalize">{faker.lorem.words({ min: 5, max: 7 })}</p>
					</ListItem>
				{/each}
			</List>
		</div>
	</Block>
</Page>
