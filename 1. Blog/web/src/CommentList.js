import React from "react";

const commentText = {
  approved: (comment) => comment,
  rejected: () => "Rejected",
  pending: () => "Comment waiting for approval",
  default: () => "Error",
};

const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    return (
      <li key={comment.id}>{commentText[comment.status] ? commentText[comment.status](comment.content) : commentText.default()}</li>
    );
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
