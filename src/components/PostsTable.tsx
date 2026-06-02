'use client';

import { useState, useEffect } from 'react';

import {
    Eye,
    Pencil,
    Trash2,
    RefreshCw,
    Image,
    Video,
    Search,
} from 'lucide-react';

import {
    Status,
    Post,
} from '@/types/post';

import { toast } from 'sonner';

import PostPagination from './posts/PostPagination';

import PostFilters from './posts/PostFilters';

import PostDetailsModal from './posts/PostDetailsModal';

import EditPostModal from './posts/EditPostModal';

import DeletePostModal
    from './posts/DeletePostModal';

const STATUS_STYLES: Record<Status, string> = {

    PENDING:
        "bg-amber-50 text-amber-700",

    PUBLISHED:
        "bg-green-50 text-green-700",

    FAILED:
        "bg-red-50 text-red-700",

    PROCESSING:
        "bg-blue-50 text-blue-700",

    QUEUED:
        "bg-purple-50 text-purple-700",
};

const DOT_STYLES: Record<Status, string> = {

    PENDING:
        "bg-amber-500",

    PUBLISHED:
        "bg-green-500",

    FAILED:
        "bg-red-500",

    PROCESSING:
        "bg-blue-500",

    QUEUED:
        "bg-purple-500",
};
const PLATFORM_STYLES: Record<string, string> = {
    instagram: 'bg-pink-50 text-pink-700',
    facebook: 'bg-blue-50 text-blue-700',
    youtube: 'bg-red-50 text-red-700',
    linkedin: 'bg-green-50 text-green-700',
    twitter: 'bg-sky-50 text-sky-700',
};

export default function PostsTable() {
    const [search, setSearch] = useState('');

    const [statusFilter, setStatusFilter] =
        useState<'all' | Status>('all');

    const [selectedPost, setSelectedPost] =
        useState<Post | null>(null);

    const [editPost, setEditPost] =
        useState<Post | null>(null);

    const [isEditOpen, setIsEditOpen] =
        useState(false);

    const [deletePost, setDeletePost] =
        useState<Post | null>(null);

    const [isDeleteOpen, setIsDeleteOpen] =
        useState(false);

    const [isModalOpen, setIsModalOpen] =
        useState(false);

    const [currentPage, setCurrentPage] = useState(1);

    const POSTS_PER_PAGE = 3;



    const [dateFilter, setDateFilter] =
        useState('all');

    const clearFilters = () => {
        setSearch('');
        setStatusFilter('all');
        setDateFilter('all');

        setStartDate('');
        setEndDate('');
    };

    const [startDate, setStartDate] =
        useState('');

    const [endDate, setEndDate] =
        useState('');


    const [posts, setPosts] =
        useState<Post[]>([]);

    useEffect(() => {

        const fetchPosts = async () => {

            try {

                const API_URL =
                    'https://socailautoposterbackend-production.up.railway.app';

                const response = await fetch(
                    `${API_URL}/posts`,
                    {
                        credentials: "include",
                    }
                );

                if (!response.ok) {

                    console.error(
                        "Failed to fetch posts:",
                        response.status
                    );

                    return;
                }

                const data = await response.json();

                if (Array.isArray(data)) {

                    setPosts(data);

                } else {

                    console.error(
                        "Expected array but got:",
                        data
                    );

                }

            } catch (error) {

                console.log(
                    "Error fetching posts:",
                    error
                );

            }
        };


        fetchPosts();

    }, []);

    const filteredPosts = posts.filter((post) => {
        const matchesSearch = post.title
            .toLowerCase()
            .includes(search.toLowerCase());

        const postDate = new Date(post.schedule_time);

        const now = new Date();

        let matchesDate = true;

        switch (dateFilter) {

            case 'all':
                matchesDate = true;
                break;

            case 'today':
                matchesDate =
                    postDate.toDateString() ===
                    now.toDateString();
                break;

            case 'yesterday':
                const yesterday = new Date();

                yesterday.setDate(
                    now.getDate() - 1
                );

                matchesDate =
                    postDate.toDateString() ===
                    yesterday.toDateString();

                break;

            case 'last7days':
                const last7 = new Date();

                last7.setDate(now.getDate() - 7);

                matchesDate =
                    postDate >= last7 &&
                    postDate <= now;

                break;

            case 'last30days':
                const last30 = new Date();

                last30.setDate(now.getDate() - 30);

                matchesDate =
                    postDate >= last30 &&
                    postDate <= now;

                break;

            case 'thisMonth':
                matchesDate =
                    postDate.getMonth() === now.getMonth() &&
                    postDate.getFullYear() === now.getFullYear()

                break;

            case 'lastMonth':
                const lastMonthDate = new Date();

                lastMonthDate.setMonth(
                    now.getMonth() - 1
                );

                matchesDate =
                    postDate.getMonth() ===
                    lastMonthDate.getMonth() &&
                    postDate.getFullYear() ===
                    lastMonthDate.getFullYear();

                break;

            case 'custom':

                if (startDate && endDate) {

                    const start =
                        new Date(startDate);

                    const end =
                        new Date(endDate);

                    matchesDate =
                        postDate >= start &&
                        postDate <= end;
                }

                break;
        }


        const matchesStatus =
            statusFilter === 'all'
                ? true
                : post.status === statusFilter;

        return matchesSearch && matchesStatus && matchesDate;
    });



    const totalPages = Math.max(
        1,
        Math.ceil(
            filteredPosts.length / POSTS_PER_PAGE
        )
    );

    const startIndex =
        (currentPage - 1) * POSTS_PER_PAGE;

    const paginatedPosts = filteredPosts.slice(
        startIndex,
        startIndex + POSTS_PER_PAGE

    );



    return (
        <div>
            <PostFilters
                search={search}
                onSearchChange={setSearch}

                statusFilter={statusFilter}
                onStatusChange={(value) =>
                    setStatusFilter(value as 'all' | Status)
                }

                dateFilter={dateFilter}
                onDateChange={setDateFilter}

                startDate={startDate}
                endDate={endDate}

                onStartDateChange={setStartDate}
                onEndDateChange={setEndDate}

                onClearFilters={clearFilters}
            />

            {/* Table */}
            <div
                className="bg-white border border-gray-100
        rounded-2xl overflow-x-auto"
            >

                <table
                    className="
  hidden md:table
  w-full text-sm
"
                >

                    <thead className="bg-gray-50">
                        <tr>

                            <th
                                className="text-left px-4 py-3
                text-xs font-semibold text-gray-400
                uppercase tracking-wide"
                            >
                                Post
                            </th>

                            <th
                                className="
  px-4 py-3
  text-left
  text-xs font-medium
  text-gray-500
  uppercase
  "
                            >
                                Media
                            </th>

                            <th
                                className="text-left px-4 py-3
                text-xs font-semibold text-gray-400
                uppercase tracking-wide"
                            >
                                Platforms
                            </th>

                            <th
                                className="text-left px-4 py-3
                text-xs font-semibold text-gray-400
                uppercase tracking-wide"
                            >
                                Scheduled For
                            </th>

                            <th
                                className="text-left px-4 py-3
                text-xs font-semibold text-gray-400
                uppercase tracking-wide"
                            >
                                Status
                            </th>

                            <th
                                className="text-left px-4 py-3
                text-xs font-semibold text-gray-400
                uppercase tracking-wide"
                            >
                                Actions
                            </th>

                        </tr>
                    </thead>

                    <tbody>

                        {filteredPosts.length > 0 ? (
                            paginatedPosts.map((post: Post) => (

                                <tr
                                    key={post.id}
                                    className="border-b border-gray-50
                  last:border-0 hover:bg-gray-50
                  transition-colors"
                                >

                                    {/* Post */}
                                    <td className="px-4 py-3">

                                        <div className="flex items-center gap-3">

                                            <div
                                                className="
    w-12 h-12
    shrink-0
    rounded-lg
    overflow-hidden
    border border-gray-200
    "
                                            >

                                                {post.media_urls?.length ? (

                                                    post.media_type === "VIDEO" ? (

                                                        <video
                                                            className="
                w-full h-full
                object-cover
                "
                                                        >
                                                            <source
                                                                src={post.media_urls[0]}
                                                            />
                                                        </video>

                                                    ) : (

                                                        <img
                                                            src={post.media_urls[0]}
                                                            alt={post.title}
                                                            className="
                w-full h-full
                object-cover
                "
                                                        />

                                                    )

                                                ) : (

                                                    <div
                                                        className="
            w-full h-full
            bg-gray-100
            flex items-center
            justify-center
            "
                                                    >

                                                        <Image
                                                            size={15}
                                                            className="text-gray-400"
                                                        />

                                                    </div>

                                                )}

                                            </div>

                                            <div>

                                                <p
                                                    className="font-medium
                          text-gray-900"
                                                >
                                                    {post.title}
                                                </p>

                                                <p
                                                    className="text-xs
                          text-gray-400 mt-0.5 capitalize"
                                                >
                                                    {post.media_type}
                                                </p>

                                            </div>

                                        </div>

                                    </td>

                                    {/* Platforms */}
                                    <td className="px-4 py-3">

                                        <div className="flex gap-1 flex-wrap">



                                            {post.platforms.map(
                                                (platform: string) => (

                                                    <span
                                                        key={platform}
                                                        className={`text-xs font-medium
            px-2 py-1 rounded-md
            ${PLATFORM_STYLES[
                                                            platform.trim()
                                                            ]}`}
                                                    >
                                                        {platform.trim()}
                                                    </span>
                                                )
                                            )}





                                        </div>

                                    </td>

                                    {/* Schedule */}
                                    <td
                                        className="px-4 py-3
                    text-sm text-gray-600"
                                    >

                                        {new Date(
                                            post.schedule_time.replace(
                                                ' ',
                                                'T'
                                            )
                                        ).toLocaleString(
                                            'en-US',
                                            {
                                                month: 'short',
                                                day: '2-digit',
                                                year: 'numeric',
                                                hour: 'numeric',
                                                minute: '2-digit',
                                            }
                                        )}


                                    </td>

                                    {/* Status */}
                                    <td className="px-4 py-3">

                                        <span
                                            className={`inline-flex items-center
                        gap-1.5 text-xs font-medium
                        px-2.5 py-1 rounded-full
                        ${STATUS_STYLES[
                                                post.status
                                                ]
                                                }`}
                                        >

                                            <span
                                                className={`w-1.5 h-1.5 rounded-full
                          ${DOT_STYLES[
                                                    post.status
                                                    ]
                                                    }`}
                                            />

                                            {post.status
                                                .charAt(0)
                                                .toUpperCase() +
                                                post.status.slice(1)}

                                        </span>

                                    </td>

                                    {/* Actions */}
                                    <td className="px-4 py-3">

                                        <div className="flex gap-1.5">

                                            <button
                                                onClick={() => {
                                                    setSelectedPost(post);
                                                    setIsModalOpen(true);
                                                }}
                                                className="w-8 h-8 flex
  items-center justify-center
  rounded-lg border border-gray-200
  hover:bg-gray-100
  transition-colors"
                                            >
                                                <Eye
                                                    size={14}
                                                    className="text-gray-500"
                                                />
                                            </button>

                                            <button
                                                onClick={() => {
                                                    setEditPost(post);
                                                    setIsEditOpen(true);
                                                }}
                                                className="w-8 h-8 flex
  items-center justify-center
  rounded-lg border border-gray-200
  hover:bg-gray-100
  transition-colors"
                                            >
                                                <Pencil
                                                    size={14}
                                                    className="text-gray-500"
                                                />
                                            </button>

                                            {post.status === 'FAILED' && (
                                                <button
                                                    onClick={() => {

                                                        const updatedPosts = posts.map(
                                                            (item) =>

                                                                item.id === post.id
                                                                    ? {
                                                                        ...item,
                                                                        status: 'scheduled' as Status,
                                                                    }
                                                                    : item
                                                        );

                                                        setPosts(updatedPosts);

                                                        toast.success(
                                                            'Retry scheduled successfully'
                                                        );

                                                    }}
                                                    className="w-8 h-8 flex
    items-center justify-center
    rounded-lg border border-blue-200
    bg-blue-50 hover:bg-blue-100
    transition-colors"
                                                >
                                                    <RefreshCw
                                                        size={14}
                                                        className="text-blue-500"
                                                    />
                                                </button>
                                            )}
                                            <button
                                                onClick={() => {
                                                    setDeletePost(post);
                                                    setIsDeleteOpen(true);
                                                }}
                                                className="w-8 h-8 flex
  items-center justify-center
  rounded-lg border border-gray-200
  hover:bg-red-50
  hover:border-red-200
  transition-colors group"
                                            >
                                                <Trash2
                                                    size={14}
                                                    className="text-gray-400
    group-hover:text-red-500"
                                                />
                                            </button>

                                        </div>

                                    </td>

                                </tr>
                            ))
                        ) : (

                            <tr>

                                <td
                                    colSpan={5}
                                    className="text-center py-14
                  text-gray-400"
                                >
                                    No posts found
                                </td>

                            </tr>
                        )}

                    </tbody>

                </table>


                {/* Mobile Cards */}
                <div className="md:hidden p-3 space-y-3">

                    {filteredPosts.length > 0 ? (

                        paginatedPosts.map((post: Post) => (

                            <div
                                key={post.id}
                                className="border border-gray-100
        rounded-2xl p-4 bg-white"
                            >

                                {/* Top */}
                                <div className="flex items-start justify-between">

                                    <div className="flex gap-3">

                                        <div
                                            className="w-10 h-10 rounded-lg
              bg-gray-100 flex items-center
              justify-center border border-gray-200"
                                        >

                                            {post.media_type === 'video' ? (
                                                <Video
                                                    size={15}
                                                    className="text-gray-400"
                                                />
                                            ) : (
                                                <Image
                                                    size={15}
                                                    className="text-gray-400"
                                                />
                                            )}

                                        </div>

                                        <div>

                                            <h3
                                                className="font-semibold
                text-gray-900 text-sm"
                                            >
                                                {post.title}
                                            </h3>

                                            <p
                                                className="text-xs text-gray-400
                capitalize mt-1"
                                            >
                                                {post.media_type}
                                            </p>

                                        </div>

                                    </div>

                                    {/* Status */}
                                    <span
                                        className={`inline-flex items-center
            gap-1.5 text-[11px] font-medium
            px-2 py-1 rounded-full
            ${STATUS_STYLES[post.status]}`}
                                    >

                                        <span
                                            className={`w-1.5 h-1.5 rounded-full
              ${DOT_STYLES[post.status]}`}
                                        />

                                        {post.status}

                                    </span>

                                </div>

                                {/* Platforms */}
                                <div className="flex flex-wrap gap-1 mt-4">

                                    {post.platforms.map(
                                        (platform: string) => (

                                            <span
                                                key={platform}
                                                className={`text-[11px] font-medium
                px-2 py-1 rounded-md
                ${PLATFORM_STYLES[platform]}`}
                                            >
                                                {platform}
                                            </span>
                                        )
                                    )}

                                </div>

                                {/* Date */}
                                <div className="mt-4">

                                    <p className="text-xs text-gray-400">
                                        Scheduled For
                                    </p>

                                    <p className="text-sm text-gray-700 mt-1">

                                        {new Date(
                                            post.schedule_time
                                        ).toLocaleString(
                                            'en-US',
                                            {
                                                month: 'short',
                                                day: '2-digit',
                                                year: 'numeric',
                                                hour: 'numeric',
                                                minute: '2-digit',
                                            }
                                        )}

                                    </p>

                                </div>

                                {/* Actions */}
                                <div className="flex gap-2 mt-4">

                                    {/* View */}
                                    <button
                                        onClick={() => {
                                            setSelectedPost(post);
                                            setIsModalOpen(true);
                                        }}
                                        className="flex-1 h-10 rounded-xl
            border border-gray-200
            flex items-center justify-center
            hover:bg-gray-50"
                                    >

                                        <Eye
                                            size={15}
                                            className="text-gray-500"
                                        />

                                    </button>

                                    {/* Edit */}
                                    <button
                                        onClick={() => {
                                            setEditPost(post);
                                            setIsEditOpen(true);
                                        }}
                                        className="flex-1 h-10 rounded-xl
            border border-gray-200
            flex items-center justify-center
            hover:bg-gray-50"
                                    >

                                        <Pencil
                                            size={15}
                                            className="text-gray-500"
                                        />

                                    </button>

                                    {/* Retry */}
                                    {post.status === 'FAILED' && (

                                        <button
                                            onClick={() => {

                                                const updatedPosts =
                                                    posts.map((item) =>

                                                        item.id === post.id
                                                            ? {
                                                                ...item,
                                                                status:
                                                                    'scheduled' as Status,
                                                            }
                                                            : item
                                                    );

                                                setPosts(updatedPosts);

                                                toast.success(
                                                    'Retry scheduled successfully'
                                                );
                                            }}
                                            className="flex-1 h-10 rounded-xl
              border border-blue-200
              bg-blue-50
              flex items-center justify-center"
                                        >

                                            <RefreshCw
                                                size={15}
                                                className="text-blue-500"
                                            />

                                        </button>
                                    )}

                                    {/* Delete */}
                                    <button
                                        onClick={() => {
                                            setDeletePost(post);
                                            setIsDeleteOpen(true);
                                        }}
                                        className="flex-1 h-10 rounded-xl
            border border-red-200
            flex items-center justify-center
            hover:bg-red-50"
                                    >

                                        <Trash2
                                            size={15}
                                            className="text-red-500"
                                        />

                                    </button>

                                </div>

                            </div>
                        ))

                    ) : (

                        <div
                            className="text-center py-12
      text-gray-400 text-sm"
                        >
                            No posts found
                        </div>

                    )}

                </div>



                <PostPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />

            </div>
            <PostDetailsModal
                post={selectedPost}
                open={isModalOpen}
                onClose={() =>
                    setIsModalOpen(false)
                }
            />

            <EditPostModal
                post={editPost}
                open={isEditOpen}
                onClose={() =>
                    setIsEditOpen(false)
                }
                posts={posts}
                setPosts={setPosts}
            />

            <DeletePostModal
                post={deletePost}
                open={isDeleteOpen}
                onClose={() =>
                    setIsDeleteOpen(false)
                }
                posts={posts}
                setPosts={setPosts}
            />

        </div>


    );
}