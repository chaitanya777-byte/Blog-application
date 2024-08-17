//check every token of req res

function checkForAutenticationCookie(cookieName){
  return (req,res,next)=>{

    //user cookie parser
    const tokenCookieValue= req.cookies[cookieName];
    if(!tokenCookieValue){
      return next();

    }
    try{
      const userPayload=validateToken(tokenCookieValue);
      req.user=userPayload;
    }catch(error){}

     return next();

  };

}

module.exports={
  checkForAutenticationCookie,
}