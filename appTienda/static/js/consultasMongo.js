db.categorias.aggregate([
    {
        $match:{
            _id: ObjectId('6418e0ec65298614ef1a2ffc')
        } 
    },
    {
        $lookup:{
            from:'productos',
            localField:'_id',
            foreignField:'categoria',
            as:'productos'
        }
    }
]).pretty()