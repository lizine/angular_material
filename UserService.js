(function(){
'use strict'

angular.module('users')
.service('userService', UserService);

function UserService($q){
	var users =[
	{
	name: 'Amber AAle',
	avatar: 'Amber',
	content: 'Amber Ale is reddish and oh, so GOOD'
	},
	{
	name: 'Stout',
	avatar: 'Stout',
	content: 'Stout is dark and oh, so GOOD'
	},
	{
	name: 'Wheat Beer',
	avatar: 'Wheat',
	content: 'Wheat is light and oh, so GOOD'
	},

	];
	 // Promise-based API
  return {
    loadAllUsers : function() {
      // Simulate async nature of real remote calls
      return $q.when(users);
    }
  };
}

 
  })();