//example of javascript super/sub classing

//this is the super class
function UserTest(name, passwordHash){
	//this protects us in case they don't 'new' up the object
	var self = this instanceof UserTest ? this : Object.create(UserTest.prototype);
	//public instance variables for this type
	self.name = name;
	self.passwordHash = passwordHash;
	self.timeCreated = function(){
		//if we want to return private variables we have to use a method on the instance
		//which is undesirable but sometimes necessary. alterative is to not bother with private variables
		return 'this was created at ' + timestamp;
	};
	//private instance variables for this type
	var timestamp = new Date().getTime();
	return self;
}
//class level variables
UserTest.prototype.greeting = function(){
	return "this is a greeting from UserTest prototype!";
};

//this is the sub class
function SuperUserTest(name, passwordHash, isAwesome){
	//this protects us in case they don't 'new' up the object
	var self = this instanceof UserTest ? this : Object.create(SuperUserTest.prototype);
	//now define the inheritence from the super class
	UserTest.call(self, name, passwordHash);
	//now define additional instance variables unique to this subclass
	self.isAwesome = isAwesome;
	self.points = 10;

	return self;
}
//now we assign the superclass prototype outside of the constructor
SuperUserTest.prototype = Object.create(UserTest.prototype);
//we can add our own subclass methods
SuperUserTest.prototype.showPoints = function(){
	return "you have " + this.points + " points";
};
//and we can override the superclass methods
SuperUserTest.prototype.greeting = function(){
	return "this is a greeting from SUPER userTest prototype!";
};

