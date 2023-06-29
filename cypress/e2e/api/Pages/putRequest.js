import postRequest from "./postRequest";

class putRequest{
    updateUser(urls,token){
     cy.fixture('users').then((users)=>{
const postr=new postRequest();
        cy.request({
            method:'PUT',
            url: urls.baseurl+urls.UpdateUserDetails+users[0].id,
            headers:{
                'Authorization':"Bearer cf80384229f8766c0ced32031687a7b241f4acb663d11bf5145118a2438365b3"
            }, 
            body :{
                    "name": "Aamir",
                    "gender": "male",
                    "email": postr.makeEmail(),
                    "status": "active"
            }
        }).then((res)=>{
            expect(res.status).to.eq(200);
            expect(res.body.name).to.eq("Aamir");

        })
    })
    }
}
export default putRequest;