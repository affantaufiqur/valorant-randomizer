import type { agentType } from 'src/type/agent.type';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const agentsRequest = await fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true');
	const agentsData: agentType = await agentsRequest.json();
	const { status, data } = agentsData;
	return {
		status,
		data
	};
}) satisfies PageServerLoad;
