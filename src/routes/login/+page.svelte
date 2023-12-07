<script lang="ts">
	import { Page, Button, Block, Preloader } from 'konsta/svelte';
	import { goto } from '$app/navigation';
	import LoginImage from '$lib/img/login.svg';
	import Google from '$lib/icon/google.svg';
	import Facebook from '$lib/icon/facebook.svg';
	import FormInput from '$lib/components/FormInput.svelte';

	let passType: string = 'password';
	let passIcon: string = 'mdi:eye';

	let loading: boolean = false;

	function showPassword() {
		passType = passType === 'password' ? 'text' : 'password';
		passIcon = passIcon === 'mdi:eye' ? 'mdi:eye-off' : 'mdi:eye';
	}
</script>

<Page>
	<Block>
		<div class="text-center grid grid-cols-1 gap-3">
			<center>
				<img alt="Login" src={LoginImage} class="w-[70%] h-auto" />
			</center>
			<div>
				<h1>Welcome to Climates</h1>
				<p>Sign to your account</p>
			</div>
			<form
				class="grid grid-cols-1 gap-3"
				on:submit|preventDefault={() => {
					loading = true;
					goto('home');
				}}
			>
				<FormInput
					required
					name="email"
					label="Email"
					type="email"
					placeholder="Input your email"
					icon="ic:baseline-email"
				/>

				<FormInput
					action
					required
					name="password"
					label="Password"
					placeholder="Input your password"
					icon="mdi:password"
					bind:type={passType}
					bind:actionIcon={passIcon}
					actionOnCLick={showPassword}
				/>

				<div>
					<p class="text-end text-primary font-bold mb-1">Forgot password?</p>
					<Button raised>
						{#if loading}
							<Preloader size="w-5 h-5" class="text-md-light-surface-1" />
						{:else}
							Login
						{/if}
					</Button>
				</div>
			</form>

			<div class="grid grid-cols-1 gap-0">
				<p>Or Sign Up With</p>
				<center>
					<div class="grid grid-cols-2 gap-x-3 w-max scale-75">
						<Button large outline rounded class="aspect-square !h-full !p-0">
							<img src={Facebook} alt="Google" class="" />
						</Button>
						<Button large outline rounded class="aspect-square !h-full">
							<img src={Google} alt="Google" />
						</Button>
					</div>
				</center>
				<p>
					Don't have account? <a class="text-primary font-bold underline" href="/register"
						>Register now</a
					>
				</p>
			</div>
		</div>
	</Block>
</Page>
