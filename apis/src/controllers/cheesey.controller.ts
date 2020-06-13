import {NextFunction, Request, Response} from "express";
import {Status} from "../../utils/interfaces/status";
import {Cheesey} from "../../utils/interfaces/cheesey";
import {insertCheeseyScore} from "../../utils/cheesey/insertCheeseyScore";
import {selectAllCheesey} from "../../utils/cheesey/selectAllCheesey";

export async function getAllCheeseyController(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const data = await selectAllCheesey()
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}

export async function postCheeseyScoreController(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const {cheeseyFoodPicId, cheeseyProfileId, cheeseyScore} = request.body
        const cheesey: Cheesey = {cheeseyFoodPicId, cheeseyProfileId, cheeseyScore}
        const result = await insertCheeseyScore(cheesey)
        return response.json({status: 200, data: null, message: result})
    } catch (error) {
        console.log(error)
    }
}