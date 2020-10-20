class Api::VideosController < ApplicationController
    def index
        @videos = Video.all

        # render :index
    end

    def show

    end

    def create

    end

    def destroy

    end

    private

    def video_params

    end
end
