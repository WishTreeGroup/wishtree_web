/**
 * Created by carrie on 2016/7/20.
 */
module.export = (function(){
    var loaddata = function(){

      return wishes;
    }
    var wishes = [
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
      getWishes: wishes
    };
})();
