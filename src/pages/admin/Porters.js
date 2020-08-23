import React, { useState, useEffect } from "react";
import porterService from "./services/porter";
import AddForm from "../../components/AddForm";
import ButtonNav from "./ButtonNav";
import EditUser from "../../components/EditUser";

const Porters = () => {
  const [content, setContent] = useState("add");
  const [porters, setPorters] = useState([]);

  useEffect(() => {
    const getporters = async () => {
      try {
        const porters = await porterService.getAll();
        setPorters(porters);
      } catch (error) {
        console.log(`error: ${error.response.data.error}`);
      }
    };
    getporters();
  }, []);

  const deletePorter = async (porter) => {
    try {
      if (
        window.confirm(
          `Delete ${porter.firstName} ${porter.lastName} from the system? `
        )
      ) {
        await porterService.remove(porter.id);
        setPorters(porters.filter((p) => p.id !== porter.id));
      }
    } catch (error) {
      alert(`error: ${error.response.data.error}`);
    }
  };
  const handleCreateSubmit = async (formdata) => {
    try {
      const porter = await porterService.create(formdata);
      setPorters([...porters, porter]);
      alert("Added Successfully");
    } catch (error) {
      alert(`error: ${error.response.data.error}`);
    }
  };
  const submitEditForm = async (user, form) => {
    try {
      const newPorter = await porterService.update(user.id, form);
      setPorters([...porters.filter((d) => d.id !== newPorter.id), newPorter]);
      alert("Updated Successfully");
    } catch (error) {
      alert(`error: ${error.response.data.error}`);
    }
  };

  return (
    <div className="container content">
      <h2 className="heading">PORTERS</h2>
      <ButtonNav
        button1="Add User"
        button2="Edit Details"
        content={content}
        setContent={setContent}
      />
      {content === "add" ? (
        <AddForm handleCreateSubmit={handleCreateSubmit} />
      ) : (
        <EditUser
          users={porters}
          deleteUser={deletePorter}
          submitEditForm={submitEditForm}
        />
      )}
    </div>
  );
};

export default Porters;
