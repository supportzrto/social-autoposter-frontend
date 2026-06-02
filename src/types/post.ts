export type Status =
    | "PENDING"
    | "PUBLISHED"
    | "FAILED"
    | "PROCESSING"
    | "QUEUED";

export interface Post {

    id: number;

    brand_id: number;

    title: string;

    caption: string;

    media_urls: string[];

    media_type: string;

    platforms: string[];

    schedule_time: string;

    status: Status;

    created_at?: string;

    published_at?: string | null;

    error_message?: string | null;
}