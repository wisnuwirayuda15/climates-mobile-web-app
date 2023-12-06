<script lang="ts">
	import RegisterImage from '$lib/img/register.svg';
	import FormInput from '$lib/components/FormInput.svelte';
	import { Page, Button, Block, Toast, DialogButton } from 'konsta/svelte';

	let passType: string = 'password';
	let passIcon: string = 'mdi:eye';
	let alertOpened: boolean = false;

	function showPassword() {
		passType = passType === 'password' ? 'text' : 'password';
		passIcon = passIcon === 'mdi:eye' ? 'mdi:eye-off' : 'mdi:eye';
	}
</script>

<Page>
	<Block>
		<div class="text-center grid grid-cols-1 gap-3">
			<center>
				<img alt="Login" src={RegisterImage} class="w-[60%] h-auto" />
			</center>
			<h1>Create Account</h1>
			<form class="grid grid-cols-1 gap-3" on:submit={() => (alertOpened = true)}>
				<FormInput
					name="username"
					label="Username"
					placeholder="Input your username"
					icon="mdi:user"
				/>

				<FormInput
					name="email"
					label="Email"
					type="email"
					placeholder="Input your email"
					icon="ic:baseline-email"
				/>

				<FormInput
					name="phone"
					label="Phone Number"
					type="tel"
					placeholder="Input your email"
					icon="mingcute:phone-fill"
				/>

				<FormInput
					action
					name="password"
					label="Password"
					placeholder="Input your password"
					icon="mdi:password"
					bind:type={passType}
					bind:actionIcon={passIcon}
					actionOnCLick={showPassword}
				/>

				<FormInput
					action
					name="confirm-password"
					label="Confirm Password"
					placeholder="Input your confirm password"
					icon="bi:key-fill"
					bind:type={passType}
					bind:actionIcon={passIcon}
					actionOnCLick={showPassword}
				/>

				<Button raised class="mt-2">Sign Up</Button>
			</form>

			<p>
				Have an account? <a class="text-primary font-bold underline" href="/login">Login</a>
			</p>
		</div>
	</Block>

	<Toast position="center" opened={alertOpened}>
		<Button slot="button" clear inline onClick={() => (alertOpened = false)} href="/login">
			Login
		</Button>
		<div class="shrink">Registration successful.</div>
	</Toast>
</Page>
