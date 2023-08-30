import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, incrementAsync, selectCount } from "./orderSlice";


export function Order() {
  const count = useSelector();
  const dispatch = useDispatch();

  return <div></div>;
}
