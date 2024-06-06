module Api
  module V1
    class MissionRecordsController < ApplicationController
      def create
        user_id = params[:id]
        mission = params[:mission]
        comment = params[:comment]
        timer = params[:timer]
        mission_result = params[:result]

        mission_record = MissionRecord.new(
          title: mission,
          comment: comment,
          timer: timer,
          result: mission_result,
          user_id: user_id
        )

        if mission_record.save
          render json: mission_record, status: :ok
        else
          render json: { errors: mission_record.errors.full_messages }, status: :unprocessable_entity
        end
      end
    end
  end
end
