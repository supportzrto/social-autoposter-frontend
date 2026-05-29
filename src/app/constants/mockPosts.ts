export type Status =
  | 'published'
  | 'scheduled'
  | 'pending'
  | 'failed';

export interface Post {
  id: number;
  title: string;
  type: string;
  platforms: string[];
  schedule_time: string;
  status: Status;
}

export const MOCK_POSTS: Post[] = [
  {
    id: 1,
    title: 'Summer sale poster',
    type: 'image',
    platforms: ['instagram', 'facebook'],
    schedule_time: '2026-05-28T10:00:00',
    status: 'scheduled',
  },

  {
    id: 2,
    title: 'Product launch video',
    type: 'video',
    platforms: ['youtube', 'linkedin'],
    schedule_time: '2026-05-27T09:00:00',
    status: 'published',
  },

  {
    id: 3,
    title: 'Brand awareness post',
    type: 'image',
    platforms: ['instagram', 'facebook', 'twitter'],
    schedule_time: '2026-05-26T15:00:00',
    status: 'failed',
  },

  {
    id: 4,
    title: 'Eid special offer',
    type: 'image',
    platforms: ['instagram', 'facebook', 'linkedin'],
    schedule_time: '2026-05-30T11:00:00',
    status: 'pending',
  },
];