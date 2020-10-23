
export const fetchComments = videoId => {
    return $.ajax({
        url: `/api/videos/${videoId}/comments`,
        method: "GET"
    })
}

export const createComment = comment => {
    return $.ajax({
        url: `/api/videos/${comment.videoId}/comments`,
        method: "POST",
        data: {comment}
    })
}

export const deleteComment= comment => {
    return $.ajax({
        url: `/api/videos/${comment.videoId}/comments/${comment.id}`,
        method: "DELETE",
    })
}