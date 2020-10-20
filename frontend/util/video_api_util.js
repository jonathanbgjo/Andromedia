export const fetchAllVideos = () => (
    $.ajax({
        method: 'GET',
        url: '/api/videos',
    })
);

export const fetchVideo = (videoId) => (
    $.ajax({
        method: 'GET',
        url: `/api/videos/${videoId}`,
    })
);
export const createVideo = (videoForm) => (
    $.ajax({
        method: 'POST',
        url: '/api/videos',
        data: videoForm
    })
);

export const updateVideo = (videoForm, videoId) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/videos/${videoId}`,
        data: videoForm
    })
);

export const deleteVideo = (videoId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/videos/${videoId}`
    })
);
