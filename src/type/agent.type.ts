export type agentType = {
	status: number;
	data: {
		uuid: string;
		displayName: string;
		description: string;
		developerName: string;
		characterTags: string[] | null | undefined;
		displayIcon: string;
		displayIconSmall: string;
		bustPortrait: string;
		fullPortrait: string;
		fullPortraitV2: string;
		killfeedPortrait: string;
		background: string;
		backgroundGradientColor: string[];
		assetPath: string;
		isFullPortraitRightFacing: boolean;
		isPlayableCharacter: boolean;
		isAvailableForTest: true;
		isBaseContent: false;
		role: {
			uuid: string;
			displayName: string;
			description: string;
			displayIcon: string;
			assetPath: string;
		};
		abilities: {
			slot: string;
			displayName: string;
			description: string;
			displayIcon: string;
		}[];
		voiceLine: {
			minDuration: number;
			maxDuration: number;
			mediaList: {
				id: number;
				wwise: string;
				wave: string;
			};
		};
	}[];
};
