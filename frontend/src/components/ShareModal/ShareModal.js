import React from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import PostShare from "../PostShare/PostShare";
import store from "../../redux/store";
import {addT} from "../../redux/action";
import { useSelector } from "react-redux";

const ShareModal = ({modalOpened, setModalOpened}) => {
  const theme = useMantineTheme();
  const addInterest = () =>{
    console.log(document.getElementById("3232").value);
    store.dispatch(addT(document.getElementById("3232").value))
  }
  const tags = useSelector((state) => state.tags);
  console.log(tags);
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size='30%'
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <h2>Add your interests</h2>
      {/* <PostShare/> */}
      <div className="addingInterest">
        <input
        id="3232"
        className="infoInput addTag"
          type="text"
        />
        <button className="button addTagButton" onClick={() => addInterest()}>
          Add Tag
        </button>
      </div>
    </Modal>
  );
};

export default ShareModal;
