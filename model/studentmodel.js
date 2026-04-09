import mongoose from "mongoose";

import studentschema from "../schema/studentschema.js";

const studentmodel = mongoose.model("students", studentschema)

export default studentmodel;