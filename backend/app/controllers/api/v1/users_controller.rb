module Api
  module V1
    class UsersController < ApplicationController
      def show
        user = User.find_by("email like ?", "#{params[:email]}%")
        if user
          render json: { user: user }, status: :ok
        else
          head :not_found
        end

      end

      def create
        # 条件に該当するデータがあればそれを返す。なければ新規作成
        user = User.find_or_create_by(provider: params[:provider], uid: params[:uid], name: params[:name], email: params[:email])      
        if user
          head :ok
        else
          render json: { error: "ログインに失敗しました" }, status: :unprocessable_entity
        end
      rescue StandardError => e
        render json: { error: e.message }, status: :internal_server_error
      end

      def destroy
        user = User.find_by("email like ?", "#{params[:email]}%")
        if user
          user.delete
        else
          render json: { error: "ユーザーが見つかりませんでした" }, status: :not_found
        end
      rescue StandardError => e
        render json: { error: e.message }, status: :internal_server_error
      end
    end
  end
end
