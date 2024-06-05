export interface MissionData {
  location: string;
  action: string;
  timer: number;
  startTime: string;
};

export interface MissionDataProps {
  missionData: MissionData;
};

export interface MissionResult {
  comment: string;
  picture: File,
  submitter: HTMLElement | null
};