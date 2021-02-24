import React from "react";
import { useDispatch } from "react-redux";
import { eventStartDelete } from "../../actions/events";

export const DeleteEventFab = () => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(eventStartDelete());
  };

  return (
    <button className="btn btn-danger fab-danger" onClick={handleDelete}>
      <li className="fas fa-trash"></li>
      <span> Borrar evento</span>
    </button>
  );
};
