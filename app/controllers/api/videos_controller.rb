class Api::VideosController < ApplicationController
    def index
        @videos = Video.all

        render :index
    end

    def show
        @video = Video.find(params[:id])
        # @video.views+=1;
        # @video.save

        render :show
    end

    def create

    end

    def destroy

    end

    private

    def video_params

    end
end
