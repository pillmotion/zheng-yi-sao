export type Partner = {
	id: string;
	name: string; // 公司名称
	logo: string; // Logo URL
	type: "jointVenture" | "strategic" | "global"; // 合作类型
	location: string; // 所在地/国家
};

export type PartnerSection = {
	type: "jointVenture" | "strategic" | "global";
	title: string;
	partners: Partner[];
};
