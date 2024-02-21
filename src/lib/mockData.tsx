const mockProfile_A = {
    id: "0",
    name: "@TestUser",
    coverPhoto: "/sonable_logo.png",
    image: "/placeholder_avatar.png",
    followers: [],
    followings: [],
    sessions: [],
    likes: [],
    events: [],
    posts: [],
    comments: [],
    postLikes: [],
    commentLikes: [],
    replies: [],
    sharedPosts: [],
    privacyLevel: 0,
    createdAt: new Date(),
    updatedAt: new Date()
}

const mockProfile_B = {
    id: "1",
    name: "@TestUser",
    coverPhoto: "/sonable_logo.png",
    image: "/placeholder_avatar_2.png",
    followers: [],
    followings: [mockProfile_A],
    sessions: [],
    likes: [],
    events: [],
    posts: [],
    comments: [],
    postLikes: [],
    commentLikes: [],
    replies: [],
    sharedPosts: [],
    privacyLevel: 0,
    createdAt: new Date(),
    updatedAt: new Date()
}

const mockPosts = [
    {
        id: "0",
        message: "Hello, world!",
        selectedEvent: null,
        eventId: null,
        selectedPost: null,
        selectedPostId: null,
        likes: [
            {
                id: "1"
            },
            {
                id: "2"
            },
            {
                id: "3"
            },
            {
                id: "4"
            }
        ],
        comments: [
            {
                id: "1",
                comment: "not interested, sorry",
                profile: mockProfile_B,
                profileId: mockProfile_B.id,
                post: null,
                postId: "0",
                createdAt: new Date(),
                updatedAt: new Date(),
                replies: [],
                likes: [
                    {
                        id: "5"
                    }
                ],
                selectedFiles: []
            }
        ],
        op: mockProfile_A,
        opProfileId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: "1",
        message: "insert pun",
        selectedEvent: null,
        eventId: null,
        selectedPost: null,
        selectedPostId: null,
        likes: [
            {
                id: "6"
            },
            {
                id: "7"
            },
        ],
        comments: [],
        op: mockProfile_B,
        opProfileId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
    }
]

export default {
    mockProfileA: mockProfile_A,
    mockProfileB: mockProfile_B,
    mockPosts: mockPosts
}