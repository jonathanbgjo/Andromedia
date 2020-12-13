class Api::LikesController < ApplicationController
    def create

    end

    def destroy

    end

    private

    def likes_param
        params.require(:like).permit(:video_id, :user_id)

    end
end
