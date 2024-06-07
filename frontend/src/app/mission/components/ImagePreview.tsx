import Image from "next/image";
import { MissionPicturePreviewProps } from "@/types/mission";

const ImagePreview = ({ prev, missionPictureURL, handleFileChange }: MissionPicturePreviewProps) => (
    <div className="mt-5">
      <div>
        {prev ? (
          <Image loader={missionPictureURL} src={prev} alt="プレビュー画像" width={300} height={300} className="mx-auto p-2" />
        ) : (
          <div className="text-lg mb-1">画像が選択されていません</div>
        )}
      </div>
      <input type="file" onChange={handleFileChange} />
    </div>
);

export default ImagePreview;
