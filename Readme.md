Interface does not check if the methods are doing the correct thing but rather makes sure these properties exist with the right parameters
~Set up contract between different classes
~Use when we have very different Objects that we want to work together
~Promotes loose coupling

Abstract classes
~Cant be used to creat instances 'const obj = new Obj();'
~Only used as Parent Class
~Can't contain real implementation for some methods
~The implemented methods can refer to other methods that don't actually exist yet(still have to provide names and types for the un-implemented methods)

'Tell TS that these methods will exist'

~Can make child classes promise to implement some other method

~Set up a contract between different classes
~Use when we are trying to build up a definition of an object
~Strongly couples classes together

THE EXACT NAMES OF WHAT YOU PROMISE MATTERS
