class Api::V1::AvatarsController < ApplicationController
  def update
    user = User.find(params[:id])
    user.avatar = params[:user][:avatar]
    if user.save
      render json: { user: user }, status: :ok
    else
      render json: { error: "アイコンの更新に失敗しました" }, status: :unprocessable_entity
    end
  end
end
