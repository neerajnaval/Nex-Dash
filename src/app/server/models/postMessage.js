import mongoose from "mongoose";

const roomSchema = mongoose.Schema({
    ID: String,
    first_Name: String, 
    Last_Name: String,
    Title: String,
    Company_Name_for_Emails: String,
    Emails: String,
    EmailStatus: String,
    Seniority: String,
    Departments: String,
    Personal_Phone: String, 
    Compnay_Phone: String,
    Employees: Number, 
    Industry: String, 
    Person_Linkedin_Url: String,
    Website: String, 
    Company_Linkedin_Url: String,
    Company_Country: String,
    Annual_Revenue: String,
    Column1: String,
})
const Room = mongoose.model('Room',roomSchema); 
export default Room;