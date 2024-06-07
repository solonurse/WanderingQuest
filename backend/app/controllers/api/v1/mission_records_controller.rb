module Api
  module V1
    class MissionRecordsController < ApplicationController
      def create
        mission_record = MissionRecord.new(mission_record_params)

        if mission_record.save
          head :ok
        else
          render json: { errors: mission_record.errors.full_messages }, status: :unprocessable_entity
        end
      end

      private

      def mission_record_params
        params.permit(:title, :comment, :timer, :mission_picture, :result).merge(user_id: params[:id])
      end
    end
  end
end
