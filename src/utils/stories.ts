import type { Story } from '../models';

/**
 * Mock story tray data for the home screen.
 *
 * The `seen` flag drives the ring treatment, so fixtures cover both states to
 * make the visual difference easy to review during UI work.
 */
const stories: Story[] = [
  {
    id: 1,
    user: {
      name: 'Oliver Smith',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    seen: false,
  },
  {
    id: 2,
    user: {
      name: 'Emily Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    seen: true,
  },
  {
    id: 3,
    user: {
      name: 'James Brown',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    seen: false,
  },
  {
    id: 4,
    user: {
      name: 'Sophia Williams',
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    seen: true,
  },
  {
    id: 5,
    user: {
      name: 'Daniel Jones',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    seen: true,
  },
  {
    id: 6,
    user: {
      name: 'Olivia Davis',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    seen: false,
  },
  {
    id: 7,
    user: {
      name: 'William Miller',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    seen: true,
  },
  {
    id: 8,
    user: {
      name: 'Ava Wilson',
      avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
    },
    seen: false,
  },
  {
    id: 9,
    user: {
      name: 'Benjamin Moore',
      avatar: 'https://randomuser.me/api/portraits/men/9.jpg',
    },
    seen: false,
  },
  {
    id: 10,
    user: {
      name: 'Isabella Taylor',
      avatar: 'https://randomuser.me/api/portraits/women/10.jpg',
    },
    seen: true,
  },
];

export default stories;
