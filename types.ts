export interface Mentor {
  id: string;
  name: string;
  role: string;
  linkedin: string;
  photo: string;
  groupId: string;
}

export interface Group {
  id: string;
  name: string;
  description: string;
  banner: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  groupId: string;
  members: string[];
  status: "Ongoing" | "Completed";
  github: string;
  tags: string[];
}

export interface CoreMember {
  id: string;
  name: string;
  role: string;
  linkedin: string;
  photo: string;
}

export interface ActiveMember {
  id: string;
  name: string;
  github: string;
  photo: string;
}

export interface Members {
  coreTeam: CoreMember[];
  activeMembers: ActiveMember[];
}

export interface Resource {
  id: string;
  title: string;
  url: string;
  groupId: string;
}

export interface Update {
  id: string;
  title: string;
  date: string;
  description: string;
}

export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
}