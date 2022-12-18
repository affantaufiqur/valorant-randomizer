<script>
	import { page } from '$app/stores';
	import '../app.css';
	import valorantLogo from '$lib/assets/images/V_Logotype_Red.png';

	const activeLink = 'text-[#E0144C] text-xl font-medium tracking-wide';
	const unactiveLink = 'text-gray-400 text-xl hover:text-[#E0144C]/80 transition-all duration-150';
</script>

<main>
	<section class="mx-auto container font-poppins">
		<header class="py-12 text-white">
			<nav class="flex flex-row gap-10 items-center">
				<img src={valorantLogo} alt="valorant logo" class="w-40 h-auto object-contain" />
				<a href="/" class={`${$page.route.id === '/' ? activeLink : unactiveLink}`}>Agents</a>
				<a href="/weapons" class={`${$page.route.id === '/weapons' ? activeLink : unactiveLink}`}
					>Weapons</a
				>
			</nav>
		</header>
		<slot />
	</section>
</main>
