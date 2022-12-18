<script>
	import { page } from '$app/stores';
	import '../app.css';

	const activeLink = 'text-blue-400 text-xl';
	const unactiveLink = 'text-gray-400 text-xl hover:text-blue-400 transition-all duration-150';
</script>

<main>
	<section class="mx-auto container">
		<header class="py-12 text-white">
			<nav class="flex flex-row gap-4">
				<a href="/" class={`${$page.route.id === '/' ? activeLink : unactiveLink}`}>Agents</a>
				<a href="/weapons" class={`${$page.route.id === '/weapons' ? activeLink : unactiveLink}`}
					>Weapons</a
				>
			</nav>
		</header>
		<slot />
	</section>
</main>
