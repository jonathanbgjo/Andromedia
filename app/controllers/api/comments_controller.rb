class Api::CommentsController < ApplicationController
    def index
        @comments = Video.find(params[:video_id]).comments
        # console.log(@comments)
        render :index
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.author_id = current_user.id
        puts @comment
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages
        end
    end
    private

    def comment_params
        params.require(:comment).permit(:body, :video_id)
    end
end
