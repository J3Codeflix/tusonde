interface User {
	ID: string;
	email: string;
	fullName: string;
	verified: boolean;
}

export interface UserProfile {
	user: User;
	accessToken: string;
}
