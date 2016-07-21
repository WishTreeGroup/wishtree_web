/**
 * Created by carrie on 2016/7/20.
 */
module.exports = (function () {

  var findById = function(id){
      for(var i=0; i<wishes.length; i++){
        if(id == wishes[i].id){
          return wishes[i];
        }
      }
      return {};
    }
    var getAllWishes = function(){
      return wishes;
  },
    wishes = [
      {
        "id": 1,
        "name": "愿望1",
        "summary": "愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事",
        "thumbnail":"../../images/wish1.jpg",
        "type": "type1",
        "score": 20
      },
      {
        "id": 2,
        "name": "愿望2",
        "summary": "愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事",
        "thumbnail":"../../images/wish2.jpg",
        "type": "type1",
        "score": 30
      },
      {
        "id": 3,
        "name": "愿望3",
        "summary": "愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事",
        "thumbnail":"../../images/wish3.jpg",
        "type": "type2",
        "score": 20
      },
      {
        "id": 4,
        "name": "愿望4",
        "summary": "愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事愿望故事",
        "thumbnail":"../../images/wish4.jpg",
        "type": "type1",
        "score": 20
      }
    ];

  return {
    findById: findById,
    getAllWishes: getAllWishes
  }
})();
