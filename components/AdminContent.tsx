import React, { useState, useEffect } from "react";
import axios, { Axios } from "axios";
import SpecialFeatureDropdoown from "./SpecialFeatureDropdoown";
import {
  FloppyDiskIcon,
  AddIcon,
  UpdatedIcon,
  TextInput,
  Pane,
  Heading,
  Dialog,
  Button,
  Checkbox,
} from "evergreen-ui";
interface Iprops {}
interface Istate {}
const baseURL = "https://dawahplay.herokuapp.com/api/v1/special/feature/create";
const AdminContent = () => {
  const [isShown, setIsShown] = React.useState(false);
  const [fname, setFname] = React.useState("");
  const [fdesc, setFdesc] = React.useState("");
  const [fid, setFid] = React.useState("");

  const [sfChecked, setfChecked] = React.useState(false);
  const [activateChecked, setactChecked] = React.useState(false);

  const addFeature = async (e: any) => {
    e.preventDefault();
    await axios
      .post(baseURL, {
        specialFeat: fname,
        specialFeatDesc: fdesc,
        specialFeatQueryId: fid,
      })
      .then((res) => console.log("Creating Features rows", res))
      .catch((err) => console.log(err));
  };

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
                Feature Details
              </Heading>
              <TextInput
                marginY={12}
                name="feature-name"
                placeholder="Enter Feature Name..."
                value={fname}
                onChange={(e: any) => setFname(e.target.value)}
                width="100%"
              />
              <TextInput
                marginY={12}
                name="feature-description"
                required
                placeholder="Enter Feature Description..."
                value={fdesc}
                onChange={(e: any) => setFdesc(e.target.value)}
                width="100%"
              />
              <TextInput
                marginY={12}
                required
                name="feature-id"
                placeholder=" Enter Feature Id..."
                value={fid}
                onChange={(e: any) => setFid(e.target.value)}
                width="100%"
              />
              <Pane>
                <Button
                  float="left"
                  iconAfter={UpdatedIcon}
                  display="inline"
                  width={100}
                >
                  Update
                </Button>

                <Button
                  float="right"
                  iconAfter={FloppyDiskIcon}
                  display="inline"
                  width={100}
                  onClick={addFeature}
                >
                  Save
                </Button>
              </Pane>
            </Pane>
            <Pane
            //   display="flex"
            //   alignItems="center"
            //   justifyContent="space-between"
            ></Pane>
            <Checkbox
              label="Show on Special Feature Page ?"
              checked={sfChecked}
              onChange={(e) => setfChecked(e.target.checked)}
            />
            {sfChecked && <SpecialFeatureDropdoown />}
            <Checkbox
              label="Activate or Disable"
              checked={activateChecked}
              onChange={(e) => setactChecked(e.target.checked)}
            />
          </form>
        </Dialog>

        <Button onClick={() => setIsShown(true)}>
          <AddIcon size={20} color="info" marginRight={16} /> Add Feature
        </Button>
      </Pane>
    </>
  );
};

export default AdminContent;
