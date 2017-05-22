class  mainController{

  constructor(){

    }

static  sendError(response,error,code){
  return response.status(code).send(error.errors) 
}

  notAllowed(req, res) {
        res.status(405).json({ error: "Method not allowed" });
    }

}

export default mainController;