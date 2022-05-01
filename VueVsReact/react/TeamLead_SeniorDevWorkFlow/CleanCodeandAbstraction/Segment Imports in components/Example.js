/* 👇 Maintain a structured import order
If you've already got some experience in React, you might have seen files that are bloated with a lot of import statements. They might also be mixed up with external imports from third-party packages and internal imports like other components, util functions, styles and many more.

Real World Example (cut): */

import React, { useState, useEffect, useCallback } from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Title from "../components/Title";
import Navigation from "../components/Navigation";
import DialogActions from "@material-ui/core/DialogActions"
import { getServiceURL } from '../../utils/getServiceURL";
import Grid from "@material-ui/core/Grid";
import Paragraph from "../components/Paragprah";
import { sectionTitleEnum } from "../../constants";
import { useSelector, useDispatch } from "react-redux";
import Box from "@material-ui/core/Box";
import axios from 'axios';
import { DatePicker } from "@material-ui/pickers";
import { Formik } from "formik";
import CustomButton from "../components/CustomButton";

/* In reality the imports span over 55 lines.
You probably recognize the deal here. It's difficult to distinguish what are all the third-party and the local (internal) imports. They are not grouped and seem to be all over the place.

Better Version:
 */
import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import axios from 'axios';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import DialogActions from "@material-ui/core/DialogActions";
import Grid from "@material-ui/core/Grid";
import { DatePicker } from "@material-ui/pickers";

import { getServiceURL } from '../../utils/getServiceURL";
import { sectionTitleEnum } from "../../constants";
import CustomButton from "../components/CustomButton";
import Title from "../components/Title";
import Navigation from "../components/Navigation";
import Paragraph from "../components/Paragraph";

/* The structure is clearer and it's very easy to distinguish where the external and internal imports are. Of course you can optimize it more if you are using more named imports (if that's possible! :) ). That allows you to import all the components that are coming from material-ui all on one line.

I've seen other developers who like to split the import structure up in three different parts:

Built-In (like 'react') --> External (third-party node modules) --> Internal.

You can manage it every time by yourself or let a linter do the job. Here's a great article about how to configure your linter for your React app to maintain a proper import structure. */