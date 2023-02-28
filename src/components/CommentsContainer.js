import React from "react";
import { FaUserAlt } from "react-icons/fa";

const commentsData = [
  {
    name: "Kartik Gupta",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    replies: [
      {
        name: "Kartik Gupta",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        replies: [],
      },
      {
        name: "Kartik Gupta",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        replies: [
          {
            name: "Kartik Gupta",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            replies: [],
          },
          {
            name: "Kartik Gupta",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            replies: [
              {
                name: "Kartik Gupta",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                replies: [],
              },
              {
                name: "Kartik Gupta",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                replies: [
                  {
                    name: "Kartik Gupta",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    replies: [],
                  },
                  {
                    name: "Kartik Gupta",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    replies: [
                      {
                        name: "Kartik Gupta",
                        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                        replies: [
                          {
                            name: "Kartik Gupta",
                            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Kartik Gupta",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    replies: [],
  },
  {
    name: "Kartik Gupta",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    replies: [
      {
        name: "Kartik Gupta",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        replies: [],
      },
    ],
  },
  {
    name: "Kartik Gupta",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    replies: [],
  },
  {
    name: "Kartik Gupta",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <div>
        <FaUserAlt className="w-6 h-6" />
      </div>
      <div className="px-3">
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-6">
        <CommentsList comments={comment.replies}/>
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
