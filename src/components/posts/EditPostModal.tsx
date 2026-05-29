'use client';

import { useEffect, useState } from 'react';

import { X } from 'lucide-react';

import { toast } from 'sonner';

import { Post, Status } from '@/app/constants/mockPosts';

type Props = {
    post: Post | null;
    open: boolean;
    onClose: () => void;

    posts: Post[];

    setPosts: React.Dispatch<
        React.SetStateAction<Post[]>
    >;
};

const STATUS_OPTIONS: Status[] = [
    'published',
    'scheduled',
    'pending',
    'failed',
];

export default function EditPostModal({
    post,
    open,
    onClose,

    posts,
    setPosts,
}: Props) {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [status, setStatus] =
        useState<Status>('scheduled');

    const [scheduledAt, setScheduledAt] =
        useState('');

    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setType(post.type);
            setStatus(post.status);

            setScheduledAt(
                post.schedule_time.slice(0, 16)
            );
        }
    }, [post]);

    if (!open || !post) return null;

    const handleSave = () => {

        const updatedPosts = posts.map(
            (item) =>

                item.id === post.id
                    ? {
                        ...item,
                        title,
                        type,
                        status,
                        scheduledAt,
                    }
                    : item
        );

        setPosts(updatedPosts);

        toast.success(
            'Post updated successfully'
        );

        onClose();
    };

    return (
        <div
            className="fixed inset-0 z-50
      flex items-center justify-center
      bg-black/40 backdrop-blur-sm p-4"
        >

            <div
                className="w-full max-w-2xl
        bg-white rounded-2xl
        shadow-2xl overflow-hidden"
            >

                {/* Header */}
                <div
                    className="flex items-center
          justify-between px-6 py-4
          border-b border-gray-100"
                >

                    <div>

                        <h2
                            className="text-xl font-semibold
              text-gray-900"
                        >
                            Edit Post
                        </h2>

                        <p className="text-sm text-gray-500 mt-1">
                            Update post details
                        </p>

                    </div>

                    <button
                        onClick={onClose}
                        className="w-9 h-9 rounded-lg
            border border-gray-200
            flex items-center justify-center
            hover:bg-gray-100 transition-colors"
                    >

                        <X
                            size={16}
                            className="text-gray-500"
                        />

                    </button>

                </div>

                {/* Body */}
                <div className="p-6 space-y-5">

                    {/* Title */}
                    <div>

                        <label
                            className="text-sm text-gray-500"
                        >
                            Title
                        </label>

                        <input
                            type="text"
                            value={title}
                            onChange={(e) =>
                                setTitle(e.target.value)
                            }
                            className="w-full h-11 px-4 mt-1
              rounded-xl border border-gray-200
              outline-none focus:ring-2
              focus:ring-indigo-500"
                        />

                    </div>

                    {/* Media Type */}
                    <div>

                        <label
                            className="text-sm text-gray-500"
                        >
                            Media Type
                        </label>

                        <select
                            value={type}
                            onChange={(e) =>
                                setType(e.target.value)
                            }
                            className="w-full h-11 px-4 mt-1
              rounded-xl border border-gray-200
              outline-none focus:ring-2
              focus:ring-indigo-500"
                        >

                            <option value="image">
                                Image
                            </option>

                            <option value="video">
                                Video
                            </option>

                        </select>

                    </div>

                    {/* Status */}
                    <div>

                        <label
                            className="text-sm text-gray-500"
                        >
                            Status
                        </label>

                        <select
                            value={status}
                            onChange={(e) =>
                                setStatus(
                                    e.target.value as Status
                                )
                            }
                            className="w-full h-11 px-4 mt-1
              rounded-xl border border-gray-200
              outline-none focus:ring-2
              focus:ring-indigo-500"
                        >

                            {STATUS_OPTIONS.map((item) => (
                                <option
                                    key={item}
                                    value={item}
                                >
                                    {item}
                                </option>
                            ))}

                        </select>

                    </div>

                    {/* Schedule */}
                    <div>

                        <label
                            className="text-sm text-gray-500"
                        >
                            Schedule Date & Time
                        </label>

                        <input
                            type="datetime-local"
                            value={scheduledAt}
                            onChange={(e) =>
                                setScheduledAt(
                                    e.target.value
                                )
                            }
                            className="w-full h-11 px-4 mt-1
              rounded-xl border border-gray-200
              outline-none focus:ring-2
              focus:ring-indigo-500"
                        />

                    </div>

                    {/* Footer */}
                    <div
                        className="flex justify-end
            gap-3 pt-3"
                    >

                        <button
                            onClick={onClose}
                            className="h-11 px-5 rounded-xl
              border border-gray-200
              text-gray-600 hover:bg-gray-50"
                        >
                            Cancel
                        </button>

                        <button
                            onClick={handleSave}
                            className="h-11 px-5 rounded-xl
              bg-indigo-600 text-white
              hover:bg-indigo-700"
                        >
                            Save Changes
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}