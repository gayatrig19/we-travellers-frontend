// React imports
import React, { useState } from 'react';
import { Link } from "react-router-dom";
// Bootstrap imports
import Media from "react-bootstrap/Media";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
// CSS imports
import styles from '../../styles/Comment.module.css';
// Component imports
import Avatar from "../../components/Avatar";
import { EditDeleteDropdown } from '../../components/EditDeleteDropdown';
import CommentEditForm from "./CommentEditForm";
import { useCurrentUser } from '../../contexts/CurrentUserContext';
// axios import
import { axiosRes } from "../../api/axiosDefaults";

const Comment = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    updated_at,
    content,
    id,
    commentlike_id,
    commentlikes_count,
    setPost,
    setComments,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const [showEditForm, setShowEditForm] = useState(false);

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments/${id}/`);
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count - 1,
          },
        ],
      }));

      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  const handleCommentLike = async () => {
    try {
      const { data } = await axiosRes.post("/commentlikes/", { comment: id });
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {...comment, commentlikes_count: comment.commentlikes_count + 1, commentlike_id: data.id}
            : comment;
        }),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  const handleCommentUnlike = async () => {
    try {
      await axiosRes.delete(`/commentlikes/${commentlike_id}`);
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {...comment, commentlikes_count: comment.commentlikes_count - 1, commentlike_id: null}
            : comment;
        }),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own comment!</Tooltip>}
            >
              <i className={`${styles.LikeIcon} far fa-heart`} />
            </OverlayTrigger>
          ) : commentlike_id ? (
            <span onClick={handleCommentUnlike}>
              <i className={`${styles.Like} fas fa-heart`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleCommentLike}>
              <i className={`${styles.LikeOutline} far fa-heart`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like comments!</Tooltip>}
            >
              <i className={`${styles.LikeIcon} far fa-heart`} />
            </OverlayTrigger>
          )}
          {commentlikes_count}
          {showEditForm ? (
            <CommentEditForm
              id={id}
              profile_id={profile_id}
              content={content}
              profileImage={profile_image}
              setComments={setComments}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <p>{content}</p>
          )}
        </Media.Body>
        {is_owner && !showEditForm && (
          <EditDeleteDropdown
            handleEdit={() => setShowEditForm(true)}
            handleDelete={handleDelete}
          />
        )}
      </Media>
    </>
  );
};

export default Comment;