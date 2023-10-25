import errorHandler from "../utils/error.js";
import Record from "../models/record_model.js";

export const getUserRecord = async (req, res) => {
    const email = req.query.email;
    
    try {
        const userRecord = await Record.find({email: email});
        if (!userRecord) {
            res.status(404).json({
                message: "Record not found."
            });
        }
        res.status(200).json(userRecord);

    } catch (err) {
        next(err);
    }
};

export const deleteUserRecord = async (req, res, next) => {
    const recordId = req.body._id;

    try {
        const result = await Record.deleteOne({ _id: recordId });
        if (result.deletedCount > 0) {

            res.status(200).json({ success: true, message: "Record deleted successfully" });
            
        } else {
            
            console.log("Record not found.");
            res.status(404).json({ success: false, message: "Record not found" });
        }

    } catch (err) {
        next(err);
    }
};

export const updateUserRecord = async (req, res, next) => {
    const {
        _id,
        activity,
        date,
        minute,
        location,
        distance,
        note,
        image} = req.body;
    console.log(req.body._id);
    const idSearch = _id['$oid'] ;
    console.log(idSearch);
    try {
        await client.connect();
        // database and collection code goes here
        const db = client.db("Fitness-Dairy");
        const coll = db.collection("Records");
        // update code goes here
        const result = await coll.updateOne(
            {
                _id: new ObjectId(idSearch)
            }, 
            {$set :
                {
                    activity: activity,
                    date: date,
                    minute: minute,
                    location: location,
                    distance: distance,
                    note: note,
                    image: image
                }
            }
        );
        console.log( idSearch + " has update with "+ result.modifiedCount);
        res.status(200).json({data:'record has been update'});
    } 
        //in case of error
    catch (error) {
        next(error);
        console.log('record is not update');
    }    
};