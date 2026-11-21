import type { Post } from '../models';

/**
 * Mock feed data for the home timeline and the profile grid.
 *
 * Keeping fixtures in a typed module lets UI components stay presentational
 * and gives us compile-time feedback when the backend contract changes.
 */
const posts: Post[] = [
  {
    id: 1,
    description:
      'I had an amazing day today! I woke up early in the morning and enjoyed nature. The sunlight, birds singing, and fresh air made me feel great. Afterwards, I had a nice coffee and read a book. In the afternoon, I went for a walk by the beach with my friends. It was a wonderful day!',
    date: '2024-06-02 11:00:00',
    likes: 150,
    comments: 30,
    image: 'https://picsum.photos/1080/607?random=1',
    user: {
      name: 'Oliver Smith',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
  },
  {
    id: 2,
    description:
      'Today, I finally went on the nature hike I had been planning for a long time. I set off early in the morning and was greeted by a breathtaking view. Walking among the greenery, listening to the birds and feeling the gentle breeze was an incredible experience. Watching the sunset was the highlight of the day!',
    date: '2024-06-03 14:30:00',
    likes: 220,
    comments: 45,
    image: 'https://picsum.photos/1080/607?random=2',
    user: {
      name: 'Emily Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
  },
  {
    id: 3,
    description:
      'I started the day with an amazing breakfast. Afterwards, I went for a walk by the beach. Getting some fresh sea air felt wonderful. I listened to music and read a book for a while. In the evening, I met up with friends for a lovely dinner. I am so happy I made the most of my day!',
    date: '2024-06-04 09:15:00',
    likes: 310,
    comments: 65,
    image: 'https://picsum.photos/1080/607?random=3',
    user: {
      name: 'James Brown',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
  },
  {
    id: 4,
    description:
      'I had a brand-new experience today! I decided to try a sport I had never done before, and I really enjoyed it. Although it was a little challenging at first, I gradually got the hang of it. Discovering new things and improving myself always gives me great motivation!',
    date: '2024-06-05 18:45:00',
    likes: 180,
    comments: 50,
    image: 'https://picsum.photos/1080/607?random=4',
    user: {
      name: 'Sophia Williams',
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
  },
  {
    id: 5,
    description:
      'I took some time for myself today and watched a great movie. It made me think and inspired me. Afterwards, I went to my favorite cafe and enjoyed a cup of coffee. Sitting outside and watching people while appreciating the beauty of nature was so peaceful. Moments like these nourish the soul.',
    date: '2024-06-06 12:10:00',
    likes: 275,
    comments: 75,
    image: 'https://picsum.photos/1080/607?random=5',
    user: {
      name: 'Daniel Jones',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
  },
  {
    id: 6,
    description: 'Making beautiful memories is priceless.',
    date: '2024-06-07 07:30:00',
    likes: 195,
    comments: 40,
    image: 'https://picsum.photos/1080/607?random=6',
    user: {
      name: 'Olivia Davis',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
  },
  {
    id: 7,
    description: 'A perfect day with coffee and a good book.',
    date: '2024-06-08 21:15:00',
    likes: 260,
    comments: 55,
    image: 'https://picsum.photos/1080/607?random=7',
    user: {
      name: 'William Miller',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
  },
  {
    id: 8,
    description: 'I had an amazing nature hike today.',
    date: '2024-06-09 13:25:00',
    likes: 350,
    comments: 90,
    image: 'https://picsum.photos/1080/607?random=8',
    user: {
      name: 'Ava Wilson',
      avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
    },
  },
  {
    id: 9,
    description: 'Music fills me with energy and rhythm!',
    date: '2024-06-10 16:40:00',
    likes: 200,
    comments: 38,
    image: 'https://picsum.photos/1080/607?random=9',
    user: {
      name: 'Benjamin Moore',
      avatar: 'https://randomuser.me/api/portraits/men/9.jpg',
    },
  },
  {
    id: 10,
    description: 'Enjoying a delicious meal is one of life’s simple pleasures.',
    date: '2024-06-11 11:55:00',
    likes: 330,
    comments: 82,
    image: 'https://picsum.photos/1080/607?random=10',
    user: {
      name: 'Isabella Taylor',
      avatar: 'https://randomuser.me/api/portraits/women/10.jpg',
    },
  },
  {
    id: 11,
    description: 'Taking time for myself is so important.',
    date: '2024-06-12 08:20:00',
    likes: 180,
    comments: 29,
    image: 'https://picsum.photos/1080/607?random=11',
    user: {
      name: 'Ethan Anderson',
      avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
    },
  },
  {
    id: 12,
    description: 'I had a wonderful surprise today.',
    date: '2024-06-13 17:10:00',
    likes: 245,
    comments: 53,
    image: 'https://picsum.photos/1080/607?random=12',
    user: {
      name: 'Mia Thomas',
      avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    },
  },
  {
    id: 13,
    description: 'The sounds of nature bring peace to my soul.',
    date: '2024-06-14 14:00:00',
    likes: 300,
    comments: 77,
    image: 'https://picsum.photos/1080/607?random=13',
    user: {
      name: 'Alexander Jackson',
      avatar: 'https://randomuser.me/api/portraits/men/13.jpg',
    },
  },
  {
    id: 14,
    description: 'Visiting an art gallery is always inspiring.',
    date: '2024-06-15 19:50:00',
    likes: 275,
    comments: 60,
    image: 'https://picsum.photos/1080/607?random=14',
    user: {
      name: 'Charlotte White',
      avatar: 'https://randomuser.me/api/portraits/women/14.jpg',
    },
  },
  {
    id: 15,
    description: 'Watching the sunset is such a beautiful feeling!',
    date: '2024-06-16 09:45:00',
    likes: 165,
    comments: 34,
    image: 'https://picsum.photos/1080/607?random=15',
    user: {
      name: 'Michael Harris',
      avatar: 'https://randomuser.me/api/portraits/men/15.jpg',
    },
  },
  {
    id: 16,
    description: 'A wonderful day spent with friends.',
    date: '2024-06-17 23:05:00',
    likes: 210,
    comments: 47,
    image: 'https://picsum.photos/1080/607?random=16',
    user: {
      name: 'Amelia Martin',
      avatar: 'https://randomuser.me/api/portraits/women/16.jpg',
    },
  },
  {
    id: 17,
    description: 'Starting a new hobby feels amazing!',
    date: '2024-06-18 06:30:00',
    likes: 320,
    comments: 85,
    image: 'https://picsum.photos/1080/607?random=17',
    user: {
      name: 'Henry Thompson',
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
  },
];

export default posts;
