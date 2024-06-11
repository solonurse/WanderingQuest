import { ChangeEvent } from "react";
import { ImageLoaderProps } from "next/image";

export interface MissionData {
  location: string;
  action: string;
  timer: number;
  startTime: string;
};

export interface MissionDataProps {
  missionData: MissionData;
};

export interface HandleSubmitProps {
  type: string
  missionData: MissionData | null;
  comment: string;
  missionPicture: File | null
};

export interface MissionPicturePreviewProps {
  prev: string;
  missionPictureURL: (props: ImageLoaderProps) => string;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export interface MissionRecordData {
  id: number;
  title: string;
  comment: string;
  created_at: string;
  result: string;
  mission_picture: { url: string | null }
};

export interface MissionRecordsProps {
  missionRecords: MissionRecordData[];
};

export interface MissionRecordDataProps {
  missionRecord: MissionRecordData
};
