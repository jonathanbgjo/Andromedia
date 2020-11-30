class Api::VideosController < ApplicationController
    def index
        puts "HEHEHEHEHE"
        puts params[:query]
        puts params
        puts "BEBEHEHEHE"
        if params[:query] == ""
            @videos = Video.all
        else
        puts params[:query]

            @videos = Video.where("title LIKE ?", "%#{params[:query]}%" )
            
            puts @videos
        end

        render :index
    end

    def show
        @video = Video.find(params[:id])
        @video.views+=1;
        @video.save

        render :show
    end

    def create
        @video = Video.new(video_params)
        @video.uploader_id = current_user.id
        @video.views=1;
        if(@video.save)
            render :show
        else
            render json: @video.errors.full_messages
        end
    end
    def update
        @video = Video.find(params[:id])
        @video.uploader_id = current_user.id
        if @video.update(video_params)
            render :show
        else
            render json: @video.errors.full_messages
        end
    end
    def destroy
        @video = Video.find(params[:id])
        if !@video.delete()
            render json: @video.errors.full_messages
        end
    end

    private

    def video_params
        params.require(:video).permit(:title,:description,:thumbnail,:video_file, :query)
    end
end
