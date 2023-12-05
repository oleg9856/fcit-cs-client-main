import React from "react";
import MainLayout from "../../../layout/main/MainLayout";
import Editor from "../../../UI/text-editor/Editor";

const EventsIndividual = () => {
  return (
    <MainLayout>
      <div className={"text-white"}>
        <Editor />
      </div>
    </MainLayout>
  );
};

export default EventsIndividual;
