/**
 * Created by carrie on 2016/7/21.
 */

module.exports = (function () {

  var findById = function(id){
      for(var i=0; i<users.length; i++){
        if(id == users[i].id){
          return users[i];
        }
      }
      return {};
    },
    users = [
      {
        "id": 1,
        "account": "peopleAccount1",
        "level": "1",
        "avatar":"../../images/wish1.jpg"
      },
      {
        "id": 2,
        "account": "peopleAccount2",
        "level": "2",
        "avatar":"../../images/wish2.jpg"
      },
      {
        "id": 3,
        "account": "peopleAccount3",
        "level": "3",
        "avatar":"../../images/wish3.jpg"
      },
      {
        "id": 4,
        "account": "peopleAccount4",
        "level": "4",
        "avatar":"../../images/wish4.jpg"
      }
    ];

  return {
    findById:findById
  }
})();

