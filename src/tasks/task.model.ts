export interface Task {
	id: string;
	title: string;
	description: string;
	status: "OPEN" | "IN_PROGRESS" | "DONE";
}
