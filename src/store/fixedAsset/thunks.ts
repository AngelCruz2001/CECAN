import cecanApi from "api/cecanApi";
import { Dispatch } from "redux";

const startGetFixedAssests = ()  =>  async (dispatch: Dispatch) => {
  const response =await cecanApi.get("/fixed_assets_descriptions");

    


}