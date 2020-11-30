export const fetchAllVideos = (query= "") => (
    $.ajax({
        method: 'GET',
        url: `/api/videos/`,
        data: {query: query}
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
        data: videoForm,
        contentType: false,
        processData: false
    })
);

export const updateVideo = (videoForm, videoId) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/videos/${videoId}`,
        data: videoForm,
        contentType: false,
        processData: false
    })
);

export const deleteVideo = (videoId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/videos/${videoId}`
    })
);
