import {Router} from "express";
import {
    deleteProfileController, getAllProfilesController,
    getProfileByEmailController,
    getProfileByHashController,
    getProfileByProfileIdController,
    postProfileController
} from "../controllers/profile.controller";
import {deleteProfile} from "../../utils/profile/deleteProfile";
import {insertProfile} from "../../utils/profile/insertProfile";
import {selectProfileByEmail} from "../../utils/profile/selectProfileByEmail";
import {selectProfileByHash} from "../../utils/profile/selectProfileByHash";
import {selectProfileByProfileId} from "../../utils/profile/selectProfileByProfileId";

export const ProfileRoute = Router()

ProfileRoute.route("/")
    .post(postProfileController)
    .get(getAllProfilesController)

ProfileRoute.route("/:profileId")
    .delete(deleteProfileController)
    .get(getProfileByProfileIdController)

ProfileRoute.route("/:profileEmail")
    .get(getProfileByEmailController)

ProfileRoute.route("/:profileHash")
    .get(getProfileByHashController)