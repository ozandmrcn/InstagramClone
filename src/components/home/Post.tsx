import type { FC } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ReadMore from '@fawazahmed/react-native-read-more';
import type { Post as PostModel } from '../../models';
import { Bookmark, Comment, Dots, Heart, Share } from '../../utils/Icons';
import FitImage from './FitImage';

/** Props for a single feed card. */
export interface PostProps {
  /** Post fixture to render. */
  post: PostModel;
}

/**
 * Feed card composed of the author row, square media, action row and caption.
 *
 * The card is presentational: all content comes from `post` and interaction
 * handlers can be attached later without changing the layout.
 */
const Post: FC<PostProps> = ({ post }) => {
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <View style={styles.userName}>
          <Image source={{ uri: post.user.avatar }} style={styles.avatar} />
          <Text style={styles.title}>{post.user.name}</Text>
        </View>

        <Dots />
      </View>

      <FitImage src={post.image} />

      <View style={styles.content}>
        <View style={styles.actions}>
          <View style={styles.leftActions}>
            <TouchableOpacity style={styles.action}>
              <Heart size={24} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.action}>
              <Comment />
            </TouchableOpacity>

            <TouchableOpacity style={styles.action}>
              <Share />
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity>
              <Bookmark />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text style={styles.likes}>{post.likes} likes</Text>
        </View>

        <View style={styles.description}>
          <Text style={styles.user}>{post.user.name}</Text>
          <ReadMore
            numberOfLines={2}
            seeLessStyle={styles.seeMore}
            seeMoreStyle={styles.seeMore}
          >
            {post.description}
          </ReadMore>
        </View>

        {post.comments > 0 && (
          <TouchableOpacity style={styles.commentsLink} activeOpacity={0.7}>
            <Text style={styles.comments}>
              {/* Keep the label grammatically correct for a single comment. */}
              {post.comments} {post.comments === 1 ? 'comment' : 'comments'}
            </Text>
          </TouchableOpacity>
        )}

        <View>
          <Text style={styles.date}>{post.date}</Text>
          <Text style={styles.translation}>See Translations</Text>
        </View>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  post: {
    marginBottom: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  userName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
  },
  content: {
    paddingHorizontal: 15,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
  },
  leftActions: {
    flexDirection: 'row',
  },
  action: {
    marginRight: 12,
  },
  likes: {
    fontWeight: '600',
    marginVertical: 4,
  },
  description: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  user: {
    fontWeight: '600',
    marginRight: 4,
  },
  seeMore: {
    color: '#999',
  },
  commentsLink: {
    paddingBottom: 7,
  },
  comments: {
    marginTop: 5,
    opacity: 0.5,
  },
  date: {
    fontSize: 13,
    opacity: 0.5,
  },
  translation: {
    fontSize: 13,
    fontWeight: '600',
    marginTop: 7,
  },
});
