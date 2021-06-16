import axios from "axios";
//const HOTEL_ID=1
const CONST_API_URL='http://localhost:8080'
//const HOTEL_API_URL=$(CONST_API_URL)/HOTEL_ID

class HotelDataService{

    //to shows list of hotels
    retriveAllDetails(){
        return axios.get(`${CONST_API_URL}/showHotels`);
    }

    //to show detail of one particular hotel given hotelID
    retrieveHotel(id){
        return axios.get(`${CONST_API_URL}/showHotelDetails/${id}`);
    }

    //to show all reviews for one particular hotel given hotelID
    retrieveReviewsForHotelById(id){
        return axios.get(`${CONST_API_URL}/showReviewForHotel/${id}`)
    }

    // addReviewForHotelByUserId(hId,uId) {
    //     return axios.post(`${CONST_API_URL}/addReview/${hId}/${uId}`)
    // }

    addReviewForHotelByUserId(hotel_id,user_id,feedback) {
        return axios.post(`${CONST_API_URL}/addReview/${hotel_id}/${user_id}`,feedback.feedback);
    }

    // loginUser(user_name,password){
    //     return axios.get(`${CONST_API_URL}/login`,{user_name,password})
    // }

    loginUser(answer){
        return axios.post(`${CONST_API_URL}/login`,answer)
    }

    getUserId(user_name){
        return axios.get(`${CONST_API_URL}/get/${user_name}`)
    }

    getHotelPattern(hotel_name){
        return axios.get(`${CONST_API_URL}/findHotelsByPattern/${hotel_name}`)
    }

    // updateTodo(name, id, todo) {
    //     //console.log('executed service')
    //     return axios.put(`${JPA_API_URL}/users/${name}/todos/${id}`, todo);
    // }
    //
    // createTodo(name, todo) {
    //     //console.log('executed service')
    //     return axios.post(`${JPA_API_URL}/users/${name}/todos/`, todo);
    // }


}
export default new HotelDataService()


