import Meetup from './model';

export const createMeetup = async(req,res) => {
    const {title, description} = req.body;
    console.log('eeeeeeeeeeeeeeeeeeeeee')
    const newMeetup = new Meetup({title, description});
    console.log(req.body)
    
    try{
        return res.status(201).json({meetup: await newMeetup.save()})
    }
    catch (e){
        console.log('sssssssssssssssss',e)
        return res.status(e.status).json({error: true, message: 'Error with Meetup'})
    }
}

export const getAllMeetups = async(req,res) => {
    console.log('finfingomolm')
    try{
        console.log('true')
        return res.status(201).json({meetups: await Meetup.find({} )});
    }
    catch (e){
        console.log('false')
        return res.status(e.status).json({error: true, message: 'Error with Meetup'})
    }
}