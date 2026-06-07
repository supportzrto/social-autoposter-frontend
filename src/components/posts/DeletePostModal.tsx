'use client';

import { Trash2, X } from 'lucide-react';
import { toast } from 'sonner';

type Props = {
    post: any;

    open: boolean;

    onClose: () => void;

    posts: any[];

    setPosts: React.Dispatch<
        React.SetStateAction<any[]>
    >;
};

export default function DeletePostModal({
    post,
    open,
    onClose,
    posts,
    setPosts,
}: Props) {

    if (!open || !post) return null;

    const API_URL =
        "https://social-poster-app.up.railway.app";

    const handleDelete = async () => {

        try {

            const response = await fetch(
                `${API_URL}/posts/${post.id}`,
                {
                    method: "DELETE",

                    credentials: "include",
                }
            );

            const data =
                await response.json();

            if (!response.ok) {

                toast.error(
                    data.detail ||
                    "Failed to delete post"
                );

                return;
            }

            const updatedPosts =
                posts.filter(
                    (item) =>
                        item.id !== post.id
                );

            setPosts(updatedPosts);

            toast.success(
                "Post deleted successfully"
            );

            onClose();

        } catch (error) {

            console.error(error);

            toast.error(
                "Something went wrong"
            );
        }
    };

    return (
        <div
            className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/40 backdrop-blur-sm
            p-4
            "
        >

            <div
                className="
                w-full max-w-md
                bg-white rounded-2xl
                shadow-2xl overflow-hidden
                "
            >

                <div
                    className="
                    flex items-center justify-between
                    px-6 py-4
                    border-b border-gray-100
                    "
                >

                    <h2
                        className="
                        text-lg font-semibold
                        text-gray-900
                        "
                    >
                        Delete Post
                    </h2>

                    <button
                        onClick={onClose}
                        className="
                        w-9 h-9 rounded-lg
                        border border-gray-200
                        flex items-center justify-center
                        hover:bg-gray-100
                        "
                    >

                        <X
                            size={16}
                            className="text-gray-500"
                        />

                    </button>

                </div>

                <div className="p-6">

                    <div
                        className="
                        w-14 h-14 rounded-full
                        bg-red-50
                        flex items-center justify-center
                        mx-auto
                        "
                    >

                        <Trash2
                            size={24}
                            className="text-red-500"
                        />

                    </div>

                    <div
                        className="
                        text-center
                        mt-4
                        "
                    >

                        <h3
                            className="
                            text-lg font-semibold
                            text-gray-900
                            "
                        >
                            Delete this post?
                        </h3>

                        <p
                            className="
                            text-sm text-gray-500
                            mt-2 leading-relaxed
                            "
                        >
                            This action cannot be undone.
                            The selected post will be
                            permanently removed.
                        </p>

                    </div>

                    <div
                        className="
                        flex justify-center
                        gap-3 mt-6
                        "
                    >

                        <button
                            onClick={onClose}
                            className="
                            h-11 px-5 rounded-xl
                            border border-gray-200
                            text-gray-600
                            hover:bg-gray-50
                            "
                        >
                            Cancel
                        </button>

                        <button
                            onClick={handleDelete}
                            className="
                            h-11 px-5 rounded-xl
                            bg-red-600 text-white
                            hover:bg-red-700
                            "
                        >
                            Delete Post
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}