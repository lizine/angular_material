(function(){

  angular.module('users').controller('UserController', UserController);



  function UserController( userService ) {
  var self = this;

  self.selected     = null;
  self.users        = [ ];
  self.selectUser   = selectUser;

  // Load all registered users

  userService
      .loadAllUsers()
      .then( function( users ) {
        self.users    = [].concat(users);
        self.selected = users[0];
      });

  /**
    * Select the current avatars
    * @param menuId
    */
   function selectUser ( user ) {
     self.selected =  user;
   }

}
})();