
export const fetchComments = videoId => {
    return $.ajax({
        url: `/api/videos/${videoId}/comments`,
        method: "GET"
    })
}

export const createComment = comment => {
    console.log(comment)
    console.log(comment.video_id)
    return $.ajax({
        url: `/api/videos/${comment.video_id}/comments`,
        method: "POST",
        data: {comment}
    })
}

export const deleteComment= comment => {
    return $.ajax({
        url: `/api/videos/${comment.video_id}/comments/${comment.id}`,
        method: "DELETE",
    })
}