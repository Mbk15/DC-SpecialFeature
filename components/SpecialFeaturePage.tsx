import React, { useState } from "react";
import AutocompleteInput from "./AutocompleteInput";
import {
  IconButton,
  AddIcon,
  TextInput,
  Pane,
  Heading,
  Dialog,
  Text,
  Button,
} from "evergreen-ui";
interface Iprops {}
interface Istate {}

const SpecialFeaturePage = () => {
  const [isShown, setIsShown] = React.useState(false);
  const [fname, setFname] = React.useState("");
  const [keyName, setKeyName] = React.useState("");
  const [mainId, setMainId] = React.useState("");
  const [keyId, setKeyId] = React.useState("");

  return (
    <>
      <Pane>
        <Dialog
          isShown={isShown}
          onCloseComplete={() => setIsShown(false)}
          hasHeader={false}
          hasFooter={false}
          width={400}
        >
          <form>
            <Pane
              height={280}
              display="flex"
              justifyContent="center"
              //   alignItems="center"
              flexDirection="column"
            >
              <Heading size={700} textAlign="center" marginBottom={20}>
                Special Feature Details
              </Heading>
              <TextInput
                marginY={12}
                name="Name Of the Page"
                placeholder="Enter Page Name.."
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                width="100%"
              />
              <TextInput
                marginY={12}
                name="main-keyword-id"
                required
                placeholder="Enter Keyword ID..."
                value={mainId}
                onChange={(e) => setMainId(e.target.value)}
                width="100%"
              />

              <AutocompleteInput />
              {/* <Text textAlign="center" marginBottom={8}>
                Add Sub Keyword
              </Text> */}

              {/* <Pane>
                <TextInput
                  float="left"
                  name="sub-keyword-name"
                  required
                  placeholder="Keyword name"
                  value={keyName}
                  onChange={(e) => setKeyName(e.target.value)}
                  display="inline"
                  width={100}
                />

                <TextInput
                  marginLeft={8}
                  float="left"
                  name="sub-keyword-id"
                  required
                  placeholder="Keyword Id..."
                  value={keyId}
                  onChange={(e) => setKeyId(e.target.value)}
                  display="inline"
                  width={100}
                />
                <IconButton
                  display="inline"
                  float="right"
                  width={50}
                  size="medium"
                  color="info"
                  icon={AddIcon}
                />
              </Pane> */}
            </Pane>
            <Pane
            //   display="flex"
            //   alignItems="center"
            //   justifyContent="space-between"
            ></Pane>
          </form>
        </Dialog>

        <Button onClick={() => setIsShown(true)}>
          <AddIcon size={20} color="info" marginRight={16} /> Create SF Page
        </Button>
      </Pane>
    </>
  );
};

export default SpecialFeaturePage;
