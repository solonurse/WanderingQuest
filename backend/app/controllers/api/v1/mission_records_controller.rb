module Api
  module V1
    class MissionRecordsController < ApplicationController
      def index
        user = User.find(params[:id])
        mission_records = user.mission_records
        render json: mission_records
      end

      def create
        mission_record = MissionRecord.new(mission_record_params)

        if mission_record.save
          head :ok
        else
          render json: { errors: mission_record.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def update
        mission_record = MissionRecord.find(params[:id]);
        if mission_record.update!(comment_params)
          head :ok
        else
          render json: { errors: mission_record.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def destroy
        mission_record = MissionRecord.find(params[:id]);
        if mission_record.destroy
          head :ok
        else
          render json: { errors: mission_record.errors.full_messages }, status: :unprocessable_entity
        end
      end

      private

      def mission_record_params
        params.permit(:title, :comment, :timer, :mission_picture, :result).merge(user_id: params[:id])
      end

      def comment_params
        params.require(:mission_record).permit(:comment)
      end
    end
  end
end
