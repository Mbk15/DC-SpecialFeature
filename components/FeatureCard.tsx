import React, { useState, useEffect } from "react";
import {
  Pane,
  IconButton,
  TrashIcon,
  Heading,
  Button,
  Paragraph,
  Text,
  majorScale,
  EditIcon,
} from "evergreen-ui";
import axios from "axios";
const FeatureCard = () => {
  const [posts, setPosts] = React.useState([]);
  const [Success, setStatus] = React.useState("");
  const [error, setErrorMessage] = React.useState("");

  const getPost = () => {
    axios
      .get("https://dawahplay.herokuapp.com/api/v1/special/feature/all")
      .then((res) => {
        const myPosts = res.data.data;

        setPosts(myPosts);
      });
  };

  useEffect(() => getPost(), []);

  const deleteRow = (id) => {
    axios
      .delete(
        `https://dawahplay.herokuapp.com/api/v1/special/feature/keyword/${id}`
      )
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      {posts.map((post, index) => {
        return (
          <Pane
            width="600px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginY={16}
            padding={16}
            background="green200"
            borderRadius={3}
            marginX="auto"
          >
            <Pane flex={1} alignItems="center" display="flex">
              <Heading size={600}>Feature IMG</Heading>

              <Paragraph
                key={index}
                marginX="auto"
                marginY={0}
                textAlign="center"
              >
                {post.specialFeat}
                <br />
                <Text key={index}>{post.specialFeatDesc}</Text>
              </Paragraph>
            </Pane>
            <Pane>
              {/* Below you can see the marginRight property on a Button. */}
              <IconButton
                onClick={() => deleteRow(post.id)}
                icon={TrashIcon}
                intent="danger"
                marginRight={majorScale(2)}
              />
              <IconButton icon={EditIcon} />
            </Pane>
          </Pane>
        );
      })}
    </>
  );
};

export default FeatureCard;
