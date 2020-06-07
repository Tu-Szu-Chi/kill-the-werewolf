export enum PlayerStatus {
	Alive = 'alive',
	Dead = 'dead',
	JustDead = 'justDead'
}

export enum PlayerRoles {
	Human = 'human',
	Werewolf = 'werewolf',
	Witch = 'witch',
	Prophet = 'prophet'
}

export interface Player {
	role: String,
	status: PlayerStatus
}