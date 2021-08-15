export class DataQueryParams {
  limit: number;

  public static parseReq(req){
    const ret = new DataQueryParams();
    ret.limit = req.n|| 100;
    return ret;
  }
}
