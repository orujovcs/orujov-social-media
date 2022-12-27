import { Modal, useMantineTheme } from "@mantine/core";
import store from "../../redux/store";
import {update} from "../../redux/action";


function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const updateInfo = () =>{
    store.dispatch(update(
      console.log(document.getElementById("1111").value),
      console.log(document.getElementById("2222").value),
      console.log(document.getElementById("3333").value),
      console.log(document.getElementById("4444").value),
      console.log(document.getElementById("5555").value),
      console.log(document.getElementById("6666").value),
    ));
  }
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="40%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm" onSubmit={handleSubmit}>
        <h3>Your info</h3>

        <div>
          <input
          id="1111"
            type="text"
            className="infoInput"
            name="FirstName"
            placeholder="First Name"
          />
          <input
          id="2222"
            type="text"
            className="infoInput"
            name="LastName"
            placeholder="Last Name"
          />
        </div>

        <div>
          <input
          id="3333"
            type="text"
            className="infoInput"
            name="worksAT"
            placeholder="Works at"
          />
        </div>

        <div>
          <input
          id="4444"
            type="text"
            className="infoInput"
            name="livesIN"
            placeholder="LIves in"
          />

          <input
          id="5555"
            type="text"
            className="infoInput"
            name="Country"
            placeholder="Country"
          />
        </div>

        <div>
          <input
          id="6666"
            type="text"
            className="infoInput"
            placeholder="RelationShip Status"
          />
        </div>


        <button className="button infoButton" onClick={() => updateInfo()}>Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
